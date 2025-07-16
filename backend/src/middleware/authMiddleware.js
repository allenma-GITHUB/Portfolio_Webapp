const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (token) {
            try {
                const decoded = jwt.verify(token, jwtSecret);
                req.user = decoded;
                next();
            } catch (error) {
                return res.status(401).send('Invalid token');
            }
        } else {
            return res.status(401).send('Token not found');
        }
    } else {
        return res.status(401).send('Authorization header not found');
    }
};
