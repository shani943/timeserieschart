import React, { useEffect } from 'react';
import { renderChart } from './components/chart';

function App() {
    useEffect(() => {
        renderChart();
    }, []);

    return (
        <div id="chart"></div>
    );
}

export default App;
