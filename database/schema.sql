-- Users Table
CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    Username NVARCHAR(50) UNIQUE NOT NULL,
    PasswordHash NVARCHAR(255) NOT NULL,
    Role NVARCHAR(50) DEFAULT 'Admin',
    LastLogin DATETIME
);

-- Resumes Table
CREATE TABLE Resumes (
    ResumeID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT FOREIGN KEY REFERENCES Users(UserID),
    FileName NVARCHAR(255) NOT NULL,
    S3_URL NVARCHAR(255) NOT NULL,
    UploadDate DATETIME DEFAULT GETDATE(),
    ParsedContent NVARCHAR(MAX)
);

-- Experiences Table
CREATE TABLE Experiences (
    ExperienceID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT FOREIGN KEY REFERENCES Users(UserID),
    JobTitle NVARCHAR(100) NOT NULL,
    Company NVARCHAR(100) NOT NULL,
    Location NVARCHAR(100),
    StartDate DATE,
    EndDate DATE,
    Description NVARCHAR(MAX)
);

-- Projects Table
CREATE TABLE Projects (
    ProjectID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT FOREIGN KEY REFERENCES Users(UserID),
    ProjectName NVARCHAR(100) NOT NULL,
    Description NVARCHAR(MAX),
    ProjectURL NVARCHAR(255),
    RepositoryURL NVARCHAR(255),
    StartDate DATE,
    EndDate DATE,
    Role NVARCHAR(100)
);

-- Skills Table
CREATE TABLE Skills (
    SkillID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT FOREIGN KEY REFERENCES Users(UserID),
    SkillName NVARCHAR(100) NOT NULL,
    Domain NVARCHAR(100), -- e.g., 'Programming Language', 'Database', 'Cybersecurity'
    ProficiencyLevel INT -- e.g., 1-5
);

-- Certifications Table
CREATE TABLE Certifications (
    CertificationID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT FOREIGN KEY REFERENCES Users(UserID),
    CertificationName NVARCHAR(100) NOT NULL,
    IssuingOrganization NVARCHAR(100),
    IssueDate DATE,
    ExpirationDate DATE,
    CredentialID NVARCHAR(100),
    CredentialURL NVARCHAR(255)
);

-- Education Table
CREATE TABLE Education (
    EducationID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT FOREIGN KEY REFERENCES Users(UserID),
    Institution NVARCHAR(100) NOT NULL,
    Degree NVARCHAR(100),
    FieldOfStudy NVARCHAR(100),
    StartDate DATE,
    EndDate DATE,
    GPA DECIMAL(3,2)
);

-- Blogs Table
CREATE TABLE Blogs (
    BlogID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT FOREIGN KEY REFERENCES Users(UserID),
    Title NVARCHAR(255) NOT NULL,
    Content NVARCHAR(MAX),
    PublishedDate DATETIME DEFAULT GETDATE(),
    LastModifiedDate DATETIME
);

-- Changelog Table
CREATE TABLE Changelog (
    ChangeID INT PRIMARY KEY IDENTITY(1,1),
    Version NVARCHAR(50),
    ChangeDescription NVARCHAR(MAX),
    ChangeDate DATETIME DEFAULT GETDATE()
);

-- Settings Table
CREATE TABLE Settings (
    SettingID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT FOREIGN KEY REFERENCES Users(UserID),
    Theme NVARCHAR(50),
    Layout NVARCHAR(50)
);
