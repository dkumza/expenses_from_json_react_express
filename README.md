# Expenses from JSON file /w Express & React

This project is about creating, reading, and manipulating data from a JSON file. It will be extended to include editing existing data and will be integrated with a React client for DOM manipulation.

### TODO

#### on server:

-  EDIT expenses
-  add mini validation
-  etc...

#### on client

-  Create front with React
-  Manipulate DOM with different Endpoints

## Structure

The project is divided into two main folders:

1. `server`: This folder contains the Express server that handles the API requests.
2. `client`: This folder contains the React application that interacts with the server.

## Server

The server is built with Express.js and provides the following endpoints:

-  `GET /expenses`: Fetches all expenses from the database.
-  `DELETE /expenses/:id`: Deletes a expense with the specified ID from the database.
-  `POST /expenses`: Adds a new expense to the database.
-  `PUT /expenses/:id`: Updates the expense with the specified ID in the database.

## Client

The client is a React application that provides a user interface for interacting with the server's endpoints. It allows you to view all expenses, delete a expenses, add a new expense and update a expenses's information.

## Installation - client side are not ready

To install the application, follow these steps:

1. Clone the repository.
2. Navigate to the `server` folder and run `npm install` to install the server dependencies.
3. Navigate to the `client` folder and run `npm install` to install the client dependencies.

## Running the Application - client side are not ready

To run the application, follow these steps:

1. In the `server` folder, run `npm run dev` to start the server.
2. In the `client` folder, run `npm run dev` to start the client.

The client will be accessible at `http://localhost:5173`, and the server will run at `http://localhost:3003`.
