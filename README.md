#  Expense Tracker

A full-stack expense tracking application built with **React, Node.js, Express, and MongoDB**.

Users can add, view, edit, delete, and filter their expenses through a responsive web interface.

##  Live Demo

**Frontend:** https://expense-tracker-frontend-nu-drab.vercel.app

**Backend:** https://expense-tracker-backend-qlol.onrender.com

##  Features

* Add new expenses
* Edit existing expenses
* Delete expenses
* Filter expenses by category
* Calculate total expenses
* Form validation
* Loading states
* Error handling
* Empty states
* Responsive UI
* REST API
* MongoDB database
* Deployed frontend and backend

##  Tech Stack

### Frontend

* React
* React Router
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Deployment

* Vercel — Frontend
* Render — Backend
* MongoDB Atlas — Database

##  Project Structure

```text
expense-tracker-frontend/
├── src/
│   ├── Home.jsx
│   ├── Expenses.jsx
│   ├── Edit.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── .env
├── .gitignore
├── package.json
└── vercel.json
```

## ⚙️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Ashabh7/expense-tracker-frontend.git
cd expense-tracker-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create an environment file

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:5000
```

### 4. Start the development server

```bash
npm run dev
```

The frontend will run locally using the Vite development server.

##  Backend

The backend repository is available here:

https://github.com/Ashabh7/expense-tracker-backend

##  Project Purpose

This project was built to practice and demonstrate full-stack development concepts including:

* React state management
* React Router
* REST API integration
* CRUD operations
* Express.js API development
* MongoDB database operations
* Form validation
* Error handling
* Environment variables
* Full-stack deployment
