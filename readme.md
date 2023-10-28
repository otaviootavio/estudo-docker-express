# Employee Management System

This repository hosts an Employee Management System, structured as a multi-container Docker application. The project is divided into three main parts: the API, frontend, and PostgreSQL initialization.
## Project Structure

Here's a high-level overview of the project's structure:
- `api`: Contains the backend service of the application, built with Node.js and Express.
- `frontend`: Hosts the frontend service built with React and Vite.
- `postgres-init`: Contains initialization scripts for the PostgreSQL database.

## Common tasks

### First run
``docker compose up --build -d``

### Check status
``docker compose ps``

### Stopping services
``docker compose down``