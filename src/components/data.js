// src/components/data.js

export function fetchDataFromDatabase() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = generateMockData();
            localStorage.setItem('timeSeriesData', JSON.stringify(data));
            resolve(data);
        }, 1000); // Simulate a 1-second delay
    });
}

function generateMockData() {
    const data = [];
    const now = new Date();
    for (let i = 0; i < 1; i++) { // Generate multiple data points
        data.push({
            date: new Date(now.getTime() ).toISOString(), // Intervals
            value: Math.random() * 100
        });
    }
    return data.reverse();
}

export async function getData() {
    let data = localStorage.getItem('timeSeriesData');
    if (data) {
        return JSON.parse(data);
    } else {
        data = await fetchDataFromDatabase();
        return data;
    }
}
