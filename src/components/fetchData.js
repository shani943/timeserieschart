import { useState, useEffect } from 'react';

const FetchData = () => {
  const filePath ='https://gist.githubusercontent.com/shani943/5c2218bc2d066fd3f637130ddb913bd6/raw/AsiaTemp.csv'; // generated csvURL from GitHUb gist
  const [data, setData] = useState(null); // Initialize data as null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(filePath);
        const csv = await response.text();
        const parsedData = parseCSV(csv);
        localStorage.setItem('cachedData', JSON.stringify(parsedData));
        setData(parsedData);
      } catch (error) {
        console.error('Error fetching CSV:', error);
      }
    };

    // Check if data exists in local storage
    const cachedData = localStorage.getItem('cachedData');
    if (cachedData) {
      // If data exists, parse and set it in state
      setData(JSON.parse(cachedData));
    } else {
      // If data doesn't exist, fetch and parse CSV data
      fetchData();
    }
  }, []);

  const parseCSV = csv => {
    const rows = csv.split('\n');
    const parsedData = rows.map(row => row.split(','));
    return parsedData;
  };
console.log(data);
  return data; // Return null or the parsed data
};

export default FetchData;
