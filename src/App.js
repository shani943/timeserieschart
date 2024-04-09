import './App.css';
import TimeSeriesChart from './components/timeSeriesChart';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>TIME SERIES CHART</h4>
        <TimeSeriesChart/> 
        <h6>scroll to zoom, click and drag to pan</h6>
      </header>
    </div>
  );
}

export default App;
