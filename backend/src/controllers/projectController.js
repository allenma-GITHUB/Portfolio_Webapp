const sql = require('mssql');

exports.getAll = async (req, res) => {
    try {
        const pool = req.app.locals.db;
        const result = await pool.request().query('SELECT * FROM Projects');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send('Error retrieving projects');
    }
};

exports.create = async (req, res) => {
    const { projectName, description, projectURL, repositoryURL, startDate, endDate, role } = req.body;
    try {
        const pool = req.app.locals.db;
        await pool.request()
            .input('UserID', sql.Int, req.user.userId)
            .input('ProjectName', sql.NVarChar, projectName)
            .input('Description', sql.NVarChar, description)
            .input('ProjectURL', sql.NVarChar, projectURL)
            .input('RepositoryURL', sql.NVarChar, repositoryURL)
            .input('StartDate', sql.Date, startDate)
            .input('EndDate', sql.Date, endDate)
            .input('Role', sql.NVarChar, role)
            .query('INSERT INTO Projects (UserID, ProjectName, Description, ProjectURL, RepositoryURL, StartDate, EndDate, Role) VALUES (@UserID, @ProjectName, @Description, @ProjectURL, @RepositoryURL, @StartDate, @EndDate, @Role)');
        res.status(201).send('Project created successfully');
    } catch (error) {
        res.status(500).send('Error creating project');
    }
};
