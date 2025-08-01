const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const sql = require('mssql');

// Database connection
const dbConfig = {
    server: 'HOME-PC01\\SQLSERVER',
    database: 'AllenPortfolio',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true,
        encrypt: false, // Set to true if you are using Azure SQL
        trustServerCertificate: true // Set to true for local dev / self-signed certs
    }
};

sql.connect(dbConfig).then(pool => {
    console.log('Connected to SQL Server');
    app.locals.db = pool;
}).catch(err => {
    console.error('Database Connection Failed! Bad Config: ', err);
});

// Middleware
app.use(express.json());

// API Routes
const authRoutes = require('./routes/auth');
const resumeRoutes = require('./routes/resumes');
const experienceRoutes = require('./routes/experiences');
const projectRoutes = require('./routes/projects');
const skillRoutes = require('./routes/skills');
const certificationRoutes = require('./routes/certifications');
const educationRoutes = require('./routes/education');
const blogRoutes = require('./routes/blogs');

app.use('/api/auth', authRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/certifications', certificationRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/blogs', blogRoutes);

const changelogRoutes = require('./routes/changelog');
app.use('/api/changelog', changelogRoutes);

const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
    res.send('Backend server is running!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
