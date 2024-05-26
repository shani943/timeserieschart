Time Series Chart with D3.js and React

This project demonstrates how to create a time series chart using D3.js within a React application. The chart displays dynamic data fetched from a database and allows zooming and panning for better exploration of the data.

Prerequisites

Before running the project, ensure you have the following installed:

    Node.js
    npm (Node Package Manager)

Getting Started

To get started with the project, follow these steps:

    Clone the repository to your local machine:

    Navigate to the project directory: cd timeserieschart

    Install the dependencies:

    npm install d3

    Start the development server:

    npm start

    Open your web browser and visit http://localhost:3000 to view the application.

Usage

Once the application is running, you will see a time series chart displayed on the page. You can interact with the chart using the following controls:

- Zoom: Use the mouse wheel to zoom in and out on the chart.

- Pan: Click and drag on the chart to pan left or right.

- Toggle Data Fetching: Click the "Toggle Data Fetching" button to start or stop fetching data from the database. When data fetching is enabled, the chart will update automatically at regular intervals.

Project Structure

The project structure is as follows:

 src/: Contains the source code for the React application.

    - components/: Contains reusable components and utility functions.

         - chart.js: Defines the time series chart component and data fetching logic.

         - data.js: Provides functions for fetching mock data from the database.

         - zoomPan.js: Implements zoom and pan functionality for the chart.

         - App.js: Main component that renders the chart.

         - index.js: Entry point of the React application.

- public/: Contains static assets and HTML template files.

- index.html: HTML template with the root element for rendering the React app.

Dependencies

The project relies on the following dependencies:

    React: JavaScript library for building user interfaces.
    D3.js: JavaScript library for manipulating documents based on data.
    Node.js: JavaScript runtime for running the development server and building the project.
