import { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState(null); // Initialize data as null

  useEffect(() => {
    const fetchData = () => {
      // Mock function to simulate data retrieval from a database
      const simulateDatabaseQuery = () => {
        return [
          ["Year", "Temperature"],
          ["2001", "15.5"],
          ["2002", "16.0"],
          ["2003", "15.8"],
          ["2004", "16.2"],
          ["2005", "16.5"],
          // Add more mock data points as needed
        ];
      };

      // Fetch mock data
      const mockData = simulateDatabaseQuery();
      localStorage.setItem("cachedData", JSON.stringify(mockData));
      setData(mockData);
    };

    // Check if data exists in local storage
    const cachedData = localStorage.getItem("cachedData");
    if (cachedData) {
      // If data exists, parse and set it in state
      setData(JSON.parse(cachedData));
    } else {
      // If data doesn't exist, fetch and parse mock data
      fetchData();
    }
  }, []);

  console.log(data);
  return data; // Return null or the parsed data
};

export default FetchData;
