# Gym Management System

A web application for gym administrators to manage members, their membership plans, and attendance.

## Features

- Member Management
  - Add new members
  - View all members
  - Edit member details
  - Delete members
- Attendance Tracking
  - Mark attendance for members
  - View attendance records
- Search and Filter
  - Search members by name
  - Filter by membership type

## Tech Stack

- Frontend: React.js with Material-UI
- Backend: Node.js + Express
- Database: MongoDB

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or a MongoDB Atlas account)

## Setup Instructions

1. Clone the repository
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```
4. Create a `.env` file in the root directory with the following content:
   ```
   MONGODB_URI=mongodb://localhost:27017/gym-management
   PORT=5000
   ```
   (Replace the MongoDB URI with your own if using MongoDB Atlas)

## Running the Application

1. Start the backend server:
   ```bash
   npm run dev
   ```
2. In a new terminal, start the frontend:
   ```bash
   cd client
   npm start
   ```
3. The application will be available at:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## API Endpoints

### Members
- GET /api/members - Get all members
- POST /api/members - Add new member
- PUT /api/members/:id - Update member
- DELETE /api/members/:id - Delete member

### Attendance
- POST /api/attendance - Mark attendance
- GET /api/attendance/:memberId - Get attendance records for a member 