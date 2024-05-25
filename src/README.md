Time Series Chart which Fetch data from cache memory and render it on browser, have zoom and pan functionaties.

React Time Series Chart with D3

This project demonstrates how to create a time series chart using React.js and D3.js, fetching data in the local cache.
If no data is available in the cache, the component should fetch data from a function designed to simulate data retrieval, as if from a database. The chart displays temperature data over time.

Installation
Clone the repository:

    git clone
    markdown

Install dependencies:

    cd npm install

Install D3

    npx install d3

bash Usage

To run the project locally, execute the following command:

    npm start

This will start the development server, and you can view the application in your browser at http://localhost:3000.

Data

Simulate Database Query: Added simulateDatabaseQuery function to generate mock data.
    
Check Local Cache: The useEffect hook checks if the data exists in localStorage. If it does, it sets the data from the cache. If not, it calls fetchData to generate and set mock data. 

    components/fetchData.js

    TimeSeriesChart.js

This component renders the time series chart using D3.js. It utilizes the fetched temperature data to plot the chart. Dependencies

    React: ^16.0.0

    D3.js: ^5.0.0