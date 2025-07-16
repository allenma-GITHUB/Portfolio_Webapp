const sql = require('mssql');

exports.getAll = async (req, res) => {
    try {
        const pool = req.app.locals.db;
        const result = await pool.request().query('SELECT * FROM Experiences');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send('Error retrieving experiences');
    }
};

exports.create = async (req, res) => {
    const { jobTitle, company, location, startDate, endDate, description } = req.body;
    try {
        const pool = req.app.locals.db;
        await pool.request()
            .input('UserID', sql.Int, req.user.userId)
            .input('JobTitle', sql.NVarChar, jobTitle)
            .input('Company', sql.NVarChar, company)
            .input('Location', sql.NVarChar, location)
            .input('StartDate', sql.Date, startDate)
            .input('EndDate', sql.Date, endDate)
            .input('Description', sql.NVarChar, description)
            .query('INSERT INTO Experiences (UserID, JobTitle, Company, Location, StartDate, EndDate, Description) VALUES (@UserID, @JobTitle, @Company, @Location, @StartDate, @EndDate, @Description)');
        res.status(201).send('Experience created successfully');
    } catch (error) {
        res.status(500).send('Error creating experience');
    }
};
