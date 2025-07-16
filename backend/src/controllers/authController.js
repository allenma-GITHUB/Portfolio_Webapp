const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sql = require('mssql');

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

exports.register = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const pool = req.app.locals.db;
        await pool.request()
            .input('username', sql.NVarChar, username)
            .input('passwordHash', sql.NVarChar, hashedPassword)
            .query('INSERT INTO Users (Username, PasswordHash) VALUES (@username, @passwordHash)');
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }

    try {
        const pool = req.app.locals.db;
        const result = await pool.request()
            .input('username', sql.NVarChar, username)
            .query('SELECT * FROM Users WHERE Username = @username');

        if (result.recordset.length > 0) {
            const user = result.recordset[0];
            const match = await bcrypt.compare(password, user.PasswordHash);
            if (match) {
                const token = jwt.sign({ userId: user.UserID, username: user.Username }, jwtSecret, { expiresIn: '1h' });
                res.json({ token });
            } else {
                res.status(401).send('Invalid credentials');
            }
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        res.status(500).send('Error logging in');
    }
};
