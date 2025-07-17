# CHANGELOG

## [1.1.0] – 2025-07-16
### Added
- Implemented all backend API endpoints for core features (resumes, experiences, projects, skills, certifications, education, and blogs).
- Implemented file upload for resumes using `multer` and parsing with `mammoth`.
- Implemented user authentication with JWT and password hashing with `bcrypt`.
- Implemented API endpoints for changelog and contact form.
- Implemented the frontend with a professional and minimalist design.
- Implemented the changelog page, contact form, and individual blog post pages.
- Implemented full CRUD functionality for the projects section in the admin panel.
- Added a Dockerfile for the backend and a vercel.json file for the frontend.

### Changed
- Redesigned the entire frontend to have a more executive and professional style.
- Updated the database configuration to be more flexible.

### Fixed
- Resolved various issues with Node.js dependencies and environment setup.

## [1.0.0] – 2025-07-16
### Added
- SQL Server schema migrated and validated in SSMS
- Resume parser initialized using `mammoth` for DOCX
- Auth, Project, and Certification APIs complete

### Upcoming
- Auto-deploy pipeline to Azure
- Create dashboard UI with React components
