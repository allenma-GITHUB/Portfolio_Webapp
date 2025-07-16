const request = require('supertest');
const express = require('express');
const authRoutes = require('../routes/auth');

const app = express();
app.use(express.json());

// Mock the database
const mockDb = {
    request: jest.fn().mockReturnThis(),
    input: jest.fn().mockReturnThis(),
    query: jest.fn()
};
app.locals.db = {
    request: () => mockDb
};

app.use('/api/auth', authRoutes);

describe('Auth Routes', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should register a new user', async () => {
        mockDb.query.mockResolvedValueOnce({ rowsAffected: [1] });
        const res = await request(app)
            .post('/api/auth/register')
            .send({ username: 'testuser', password: 'password' });
        expect(res.statusCode).toEqual(201);
        expect(res.text).toBe('User registered successfully');
    });

    it('should login an existing user', async () => {
        const hashedPassword = await require('bcrypt').hash('password', 10);
        mockDb.query.mockResolvedValueOnce({ recordset: [{ UserID: 1, Username: 'testuser', PasswordHash: hashedPassword }] });
        const res = await request(app)
            .post('/api/auth/login')
            .send({ username: 'testuser', password: 'password' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });
});
