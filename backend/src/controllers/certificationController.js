const sql = require('mssql');

exports.getAll = async (req, res) => {
    try {
        const pool = req.app.locals.db;
        const result = await pool.request().query('SELECT * FROM Certifications');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send('Error retrieving certifications');
    }
};

exports.create = async (req, res) => {
    const { certificationName, issuingOrganization, issueDate, expirationDate, credentialID, credentialURL } = req.body;
    try {
        const pool = req.app.locals.db;
        await pool.request()
            .input('UserID', sql.Int, req.user.userId)
            .input('CertificationName', sql.NVarChar, certificationName)
            .input('IssuingOrganization', sql.NVarChar, issuingOrganization)
            .input('IssueDate', sql.Date, issueDate)
            .input('ExpirationDate', sql.Date, expirationDate)
            .input('CredentialID', sql.NVarChar, credentialID)
            .input('CredentialURL', sql.NVarChar, credentialURL)
            .query('INSERT INTO Certifications (UserID, CertificationName, IssuingOrganization, IssueDate, ExpirationDate, CredentialID, CredentialURL) VALUES (@UserID, @CertificationName, @IssuingOrganization, @IssueDate, @ExpirationDate, @CredentialID, @CredentialURL)');
        res.status(201).send('Certification created successfully');
    } catch (error) {
        res.status(500).send('Error creating certification');
    }
};
