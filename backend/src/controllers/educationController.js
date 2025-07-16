const sql = require('mssql');

exports.getAll = async (req, res) => {
    try {
        const pool = req.app.locals.db;
        const result = await pool.request().query('SELECT * FROM Education');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send('Error retrieving education');
    }
};

exports.create = async (req, res) => {
    const { institution, degree, fieldOfStudy, startDate, endDate, gpa } = req.body;
    try {
        const pool = req.app.locals.db;
        await pool.request()
            .input('UserID', sql.Int, req.user.userId)
            .input('Institution', sql.NVarChar, institution)
            .input('Degree', sql.NVarChar, degree)
            .input('FieldOfStudy', sql.NVarChar, fieldOfStudy)
            .input('StartDate', sql.Date, startDate)
            .input('EndDate', sql.Date, endDate)
            .input('GPA', sql.Decimal(3, 2), gpa)
            .query('INSERT INTO Education (UserID, Institution, Degree, FieldOfStudy, StartDate, EndDate, GPA) VALUES (@UserID, @Institution, @Degree, @FieldOfStudy, @StartDate, @EndDate, @GPA)');
        res.status(201).send('Education created successfully');
    } catch (error) {
        res.status(500).send('Error creating education');
    }
};
