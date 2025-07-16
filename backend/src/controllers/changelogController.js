const sql = require('mssql');

exports.getAll = async (req, res) => {
    try {
        const pool = req.app.locals.db;
        const result = await pool.request().query('SELECT * FROM Changelog ORDER BY ChangeDate DESC');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send('Error retrieving changelog');
    }
};
