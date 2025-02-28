# NestJS User Management API

A modern, well-structured REST API for user management built with NestJS, MongoDB, and Swagger documentation.

## Features

- **Clean Architecture**: Organized using use-case driven approach for better maintainability
- **MongoDB Integration**: Persistent storage with Mongoose ODM
- **Validation**: Request validation using Zod schemas
- **API Documentation**: Comprehensive Swagger documentation
- **TypeScript**: Type-safe codebase

## Prerequisites

- Node.js (v18+) initially created with v20.5.1 and moved to v20.18.3
- npm
- MongoDB (local or remote)

## Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd nestjs-experiment

# Install dependencies
npm install
```

## Configuration

Create a `.env` file in the root directory with the following variables:

```
MONGODB_URI=mongodb://localhost:27017/nestjs-experiment
PORT=3000
```

## Running the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```

The application will be available at `http://localhost:3000`.

## API Documentation

Swagger documentation is available at `http://localhost:3000/api` when the application is running.

## Project Structure

This project follows a use-case driven approach to organize the codebase. For detailed information about the project structure and architecture, please refer to [ARCHITECTURE.md](ARCHITECTURE.md).

## Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## Next Steps

For planned improvements and pending tasks, please refer to the [PENDING_CHORES.TXT](PENDING_CHORES.TXT) file.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
