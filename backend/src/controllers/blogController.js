const sql = require('mssql');

exports.getAll = async (req, res) => {
    try {
        const pool = req.app.locals.db;
        const result = await pool.request().query('SELECT * FROM Blogs');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send('Error retrieving blogs');
    }
};

exports.create = async (req, res) => {
    const { title, content } = req.body;
    try {
        const pool = req.app.locals.db;
        await pool.request()
            .input('UserID', sql.Int, req.user.userId)
            .input('Title', sql.NVarChar, title)
            .input('Content', sql.NVarChar, content)
            .query('INSERT INTO Blogs (UserID, Title, Content) VALUES (@UserID, @Title, @Content)');
        res.status(201).send('Blog created successfully');
    } catch (error) {
        res.status(500).send('Error creating blog');
    }
};
