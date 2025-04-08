# Trello Backend

This is the backend for a Trello-like application built using NestJS. The project includes RESTful APIs and integrates with PostgreSQL using TypeORM for database management.

## Table of Contents
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
  - [Build](#build)
  - [Start](#start)
  - [Start in Development Mode](#start-in-development-mode)
  - [Lint](#lint)
  - [Test](#test)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

Follow these steps to set up the project:

1. Clone the repository:
    ```bash
    git clone <your-repository-url>
    ```

2. Navigate into the project directory:
    ```bash
    cd trello-be
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file at the root of the project and define necessary environment variables like database connection settings.

## Running the Application

To run the backend server, use the following commands:

### Start in Development Mode

For development mode with live-reloading:
```bash
npm run start:dev
