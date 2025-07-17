# AGENTS.md

This document provides instructions and tips for AI agents working on the Maurice Allen Portfolio project.

## Project Overview

The Maurice Allen Portfolio is a dynamic, self-hosted professional web application designed to serve as a job acquisition tool and personal brand hub. It consolidates law enforcement, IT, cybersecurity, and software development experience into a centralized, interactive, AI-trackable web platform.

## Tech Stack

*   **Frontend:** Next.js, React.js, Tailwind CSS
*   **Backend:** Node.js, Express.js, mssql
*   **Database:** Microsoft SQL Server

## Development Environment

To set up the local development environment, please refer to the instructions provided in the `README.md` file.

## Coding Conventions

*   **JavaScript/Node.js:** Follow the Airbnb JavaScript Style Guide.
*   **React:** Follow the official React documentation and best practices.
*   **CSS:** Use Tailwind CSS utility classes whenever possible. Avoid writing custom CSS unless absolutely necessary.

## Running Tests

*   **Backend:** Run `npm test` in the `backend` directory to run the backend tests.
*   **Frontend:** There are currently no tests for the frontend.

## Deployment

*   **Frontend:** The frontend is deployed to Vercel. The `vercel.json` file contains the deployment configuration.
*   **Backend:** The backend is deployed to Azure App Service. The `Dockerfile` contains the container configuration.

## Important Notes

*   When making changes to the database schema, be sure to update the `database/schema.sql` file.
*   When making changes to the API, be sure to update the Postman collection (if available) and the API documentation.
*   When making changes to the frontend, be sure to test the application on multiple browsers and devices.
*   Always update the `CHANGELOG.md` file with any significant changes.
*   Before submitting your changes, make sure to run all the tests and ensure they pass.
*   If you are having trouble with the Node.js dependencies, try deleting the `node_modules` directory and the `package-lock.json` file, and then running `npm install` again.
*   If you are still having trouble, please ask for help.
*   Please be respectful of the user's data and privacy. Do not log any sensitive information.
*   Have fun and be creative!
