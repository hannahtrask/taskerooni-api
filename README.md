# Taskerooni API

A MongoDB Atlas-powered REST API built with Express, TypeScript, and Mongoose.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Update `MONGODB_URI` with your MongoDB Atlas connection string
   - Get your connection string from [MongoDB Atlas](https://cloud.mongodb.com/)

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## API Endpoints

### Tasks

- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get a single task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

### Example Request Body (POST/PUT)

```json
{
  "title": "Complete project",
  "description": "Finish the MongoDB API",
  "priority": "high",
  "dueDate": "2026-01-20T00:00:00.000Z"
}
```

## Project Structure

```
taskerooni-api/
├── src/
│   ├── config/
│   │   └── database.ts      # MongoDB connection
│   ├── models/
│   │   └── Task.ts          # Task model
│   ├── routes/
│   │   └── taskRoutes.ts    # Task routes
│   └── index.ts             # Main server file
├── .env.example             # Environment variables template
├── package.json
└── tsconfig.json
```

## Technologies

- **Express** - Web framework
- **TypeScript** - Type safety
- **Mongoose** - MongoDB ODM
- **MongoDB Atlas** - Cloud database
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment configuration

