# Hackman V7

Official website of Hackman V7 organised by the Department of ISE, DSCE

# About

Welcome to the backend of Hackman V7. This section provides an overview of the backend architecture, technologies, and services used in the development of our platform.

## Technologies and Services Used

### Programming Languages and Frameworks

- **Node.js**: A JavaScript runtime for building scalable server-side applications.
- **Express.js**: A minimalist web framework for Node.js, used for routing and middleware.
- **TypeScript**: A statically typed superset of JavaScript, providing enhanced developer experience and improved code quality.

### Database

- **PostgreSQL**: An open-source relational database management system known for its robustness, reliability, and performance.
- **Prisma**: A modern database toolkit and ORM for Node.js and TypeScript, providing type-safe database access and schema migrations.

### Image Storage

- **Amazon S3**: A scalable object storage service provided by Amazon Web Services (AWS), used for storing and serving static assets and user-uploaded files.

### Message Queue

- **Redis**: An in-memory data structure store used as a message broker for handling background job processing and task queues.
- **BullMQ**: A Redis-based queue library for Node.js, providing reliable and efficient message queuing and job scheduling.

### Validation

- **Zod**: A TypeScript-first schema declaration and validation library, used for validating input data and ensuring data integrity.

### API Documentation

- **Swagger**: A powerful tool for designing, building, and documenting APIs. Used for generating interactive API documentation and client SDKs.

## Setup

1. **Clone the hackmanv7 Repository**:

   ```shell
   git clone git@github.com:Genesis-ISE-DSCE/hackmanv7.git
   ```

   or

   ```shell
   git clone https://github.com/Genesis-ISE-DSCE/hackmanv7.git
   ```

2. **Move to Backend Directory**:

   ```shell
   cd hackmanv7/backend
   ```

3. **Install Dependencies**:

   ```shell
   npm install
   ```

4. **Create .env File**:

   ```shell
   cp .env.sample .env
   ```

5. **Setup PostgresSQL Migrations**

   After setting up your PostgreSQL database and configuring the `.env` file, you can run migrations to create the necessary tables in your database. Use the following command:

   ```shell
   npm run migrate

   ```

6. **Setup Database and Redis**:

   Ensure Docker is installed and running, then execute:

   ```shell
   docker compose up -d
   ```

   The .env variables are pre-configured; no changes are required.

7. **Alternative Database and Redis Instances**:
   You can obtain Database and Redis instances from providers like Aiven for Redis and Supabase or Neon.tech for PostgreSQL.

8. **Update .env Variables for External Services**:
   If using external services for database and Redis, ensure to update the corresponding .env variables with the credentials provided by the service provider.

9. **Setup Other Environment Variables**:
   Configure additional environment variables such as PORT, S3 credentials, Mail credentials, Admin email, and password in the `.env` file according to your application's requirements.

10. **Start the Server**:
    Run the following command to start the server:

```shell
npm run dev
```

The server will start successfully!

11. **Explore Endpoints Using API Documentation**:
    Access the API documentation by navigating to the `/api-docs` route in your web browser. A user interface will open containing detailed information about each endpoint, along with the option to try them out interactively.
