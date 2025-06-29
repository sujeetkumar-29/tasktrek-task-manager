# TaskTrek

TaskTrek is a full-stack productivity application for managing tasks, built with a React + Vite frontend and an Express + MongoDB backend.

## Features

* User authentication (register, login, JWT-based)
* Create, update, delete, and view tasks
* Task priorities (Low, Medium, High)
* Task filtering and search
* Responsive, modern UI with Tailwind CSS
* Persistent user sessions

## Project Structure

```
backend/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── .env
├── package.json
└── server.js

frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

* Node.js (v18+ recommended)
* npm
* MongoDB Atlas account or local MongoDB instance

### Backend Setup

1. Go to the `backend` directory:

   ```sh
   cd backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Configure environment variables in `.env`:

   ```env
   MONGO_URI=<your_mongo_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

4. Start the backend server:

   ```sh
   npm start
   ```

   The backend runs on `http://localhost:4000` by default.

### Frontend Setup

1. Go to the `frontend` directory:

   ```sh
   cd frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Configure the backend API URL in `.env` if needed:

   ```env
   VITE_BACKEND_URL=http://localhost:4000/api
   ```

4. Start the frontend development server:

   ```sh
   npm run dev
   ```

   The frontend runs on `http://localhost:5173` by default.

## Usage

* Register a new account or log in.
* Create, edit, complete, or delete tasks.
* Filter tasks by priority or status.
* Log out to end your session.

## Tech Stack

**Frontend:** React, Vite, Tailwind CSS, lucide-react

**Backend:** Express.js, MongoDB, Mongoose, JWT, bcryptjs

## License

This project is licensed under the MIT License.

Happy task tracking!
