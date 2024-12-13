# MERN Authentication System

This project is a **MERN stack** application that provides user authentication features, including login, signup, and forgot password. The application demonstrates secure user management with JWT-based authentication, password hashing, and integration of React with a Node.js backend.

## Features
- **User Signup:** Create an account with name, email, and password.
- **User Login:** Authenticate users using email and password.
- **Password Management:** Toggle password visibility and reset forgotten passwords.
- **JWT Authentication:** Secure access with JWT tokens stored in HTTP-only cookies.
- **Responsive Design:** User-friendly and responsive UI built with React.
- **Toast Notifications:** Feedback on user actions using `react-toastify`.

## Tech Stack
### Frontend
- **React**: Component-based user interface.
- **React Router**: Navigation and routing.
- **Tailwind CSS**: Responsive and modern UI styling.
- **React Toastify**: Notifications for user feedback.

### Backend
- **Node.js & Express**: Server and REST API development.
- **MongoDB**: NoSQL database for user data storage.
- **Mongoose**: ODM for MongoDB.
- **bcryptjs**: Password hashing for secure storage.
- **jsonwebtoken (JWT)**: User authentication with tokens.


## Contributions
- Contributions are welcome, you can suggest any modifications fkr the better featues.
## Setup and Installation
Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

### 2. Setup Backend
 
Navigate to the backend directory: cd backend
Install dependencies: npm install
Create a .env file in the backend directory with the following variables: 

PORT=8000
FRONTEND_URL=http://localhost:3000
JSONWEBTOKEN=your_secret_key
MONGO_URI=mongodb+srv://your_mongo_uri

Start the backend server: npm run dev

### 3. Setup Frontend

Navigate to the frontend directory: cd frontend
Install dependencies: npm install
Start the frontend server: npm start

## 4. Access the Application

Once both the backend and frontend servers are running:

- **Open your browser and navigate to http://localhost:3000 to access the application.
```