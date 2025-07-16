const multer = require('multer');
const mammoth = require('mammoth');
const sql = require('mssql');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage }).single('resume');

exports.upload = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        try {
            const { rawText } = await mammoth.extractRawText({ path: req.file.path });
            const pool = req.app.locals.db;
            await pool.request()
                .input('UserID', sql.Int, req.user.userId) // Assuming userId is available from a protected route middleware
                .input('FileName', sql.NVarChar, req.file.filename)
                .input('S3_URL', sql.NVarChar, req.file.path)
                .input('ParsedContent', sql.NVarChar, rawText)
                .query('INSERT INTO Resumes (UserID, FileName, S3_URL, ParsedContent) VALUES (@UserID, @FileName, @S3_URL, @ParsedContent)');
            res.status(201).send({ message: 'Resume uploaded and parsed successfully', filePath: req.file.path });
        } catch (error) {
            res.status(500).send('Error processing resume');
        }
    });
};

exports.getLatest = async (req, res) => {
    try {
        const pool = req.app.locals.db;
        const result = await pool.request()
            .input('UserID', sql.Int, req.user.userId) // Assuming userId is available from a protected route middleware
            .query('SELECT TOP 1 * FROM Resumes WHERE UserID = @UserID ORDER BY UploadDate DESC');

        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).send('No resume found');
        }
    } catch (error) {
        res.status(500).send('Error retrieving resume');
    }
};
