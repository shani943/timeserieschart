Time Series Chart which Fetch data from cache memory and render it on browser, have zoom and pan functionaties.

sql
# React Time Series Chart with D3

This project demonstrates how to create a time series chart using React.js and D3.js, fetching data from an external CSV file. The chart displays temperature data over time.

## Installation

1. Clone the repository:

git clone <repository-url>

markdown

2. Install dependencies:

cd <project-folder>
npm install

bash


## Usage

To run the project locally, execute the following command:

npm start



This will start the development server, and you can view the application in your browser at `http://localhost:3000`.

## Data

The temperature data is fetched from an external CSV file using the `FetchData.js` module. The CSV file is located at:

https://gist.githubusercontent.com/shani943/5c2218bc2d066fd3f637130ddb913bd6/raw/AsiaTemp.csv


## Components

### FetchData.js

This module fetches the temperature data from the CSV file and parses it for further use in the application.

### TimeSeriesChart.js

This component renders the time series chart using D3.js. It utilizes the fetched temperature data to plot the chart.

## Dependencies

- React: ^16.0.0
- D3.js: ^5.0.0

Thank You.
