const sql = require('mssql');

exports.getAll = async (req, res) => {
    try {
        const pool = req.app.locals.db;
        const result = await pool.request().query('SELECT * FROM Skills');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send('Error retrieving skills');
    }
};

exports.create = async (req, res) => {
    const { skillName, domain, proficiencyLevel } = req.body;
    try {
        const pool = req.app.locals.db;
        await pool.request()
            .input('UserID', sql.Int, req.user.userId)
            .input('SkillName', sql.NVarChar, skillName)
            .input('Domain', sql.NVarChar, domain)
            .input('ProficiencyLevel', sql.Int, proficiencyLevel)
            .query('INSERT INTO Skills (UserID, SkillName, Domain, ProficiencyLevel) VALUES (@UserID, @SkillName, @Domain, @ProficiencyLevel)');
        res.status(201).send('Skill created successfully');
    } catch (error) {
        res.status(500).send('Error creating skill');
    }
};
