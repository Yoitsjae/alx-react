# Personal Finance Management System

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributors](#contributors)
- [License](#license)

## Introduction
The Personal Finance Management System is a comprehensive web application that allows users to manage their personal finances effectively. Users can track their income, expenses, and savings, create budgets, set financial goals, and view interactive reports.

## Features
- **User Authentication and Profiles**: Secure login and profile management.
- **Expense and Income Tracking**: Log and categorize expenses and income.
- **Budget Creation and Monitoring**: Set and monitor budgets.
- **Financial Goals**: Set and track progress towards financial goals.
- **Interactive Charts and Reports**: Visualize financial data with charts.
- **Bank API Integration**: Automatic transaction import from bank accounts.

## Technologies Used
- **Front-end**: React
- **Back-end**: Node.js with Express
- **Database**: MongoDB
- **Third-party Services**:
  - Plaid API for bank integration
  - Chart.js for visualizations

## Setup and Installation
### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB

### Installation Steps
1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/personal-finance-management.git
   cd personal-finance-management

Set up the server:

sh

cd server
npm install
Set up the client:

sh


cd ../client
npm install
Environment variables:
Create a .env file in the server directory with the following variables:

plaintext
Copy code
MONGODB_URI=your_mongodb_uri
PLAID_CLIENT_ID=your_plaid_client_id
PLAID_SECRET=your_plaid_secret
JWT_SECRET=your_jwt_secret
Run the server:

sh

cd ../server
npm start
Run the client:

sh

cd ../client
npm start

Usage
Registration and Login: Create an account or log in with existing credentials.
Dashboard: View a summary of your financial status.
Transactions: Add, view, and categorize income and expenses.
Budgets: Create and monitor budgets.
Goals: Set financial goals and track progress.
Reports: View visual reports of your financial data.
Folder Structure
bash

personal-finance-management/
  ├── client/          # Front-end (React)
  ├── server/          # Back-end (Node.js, Express)
  ├── .gitignore
  ├── README.md

API Endpoints
Authentication
POST /api/auth/register - Register a new user
POST /api/auth/login - Login an existing user
Transactions
GET /api/transactions - Get all transactions
POST /api/transactions - Add a new transaction
PUT /api/transactions/:id - Update a transaction
DELETE /api/transactions/:id - Delete a transaction
Budgets
GET /api/budgets - Get all budgets
POST /api/budgets - Create a new budget
PUT /api/budgets/:id - Update a budget
DELETE /api/budgets/:id - Delete a budget
Goals
GET /api/goals - Get all goals
POST /api/goals - Create a new goal
PUT /api/goals/:id - Update a goal
DELETE /api/goals/:id - Delete a goal
Testing
Run server-side tests:
sh

cd server
npm test

Contributors:
Jae Ncube - GitHub
