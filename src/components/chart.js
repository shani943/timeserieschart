// src/components/chart.js

import * as d3 from 'd3';
import { getData, fetchDataFromDatabase } from './data';
import { addZoomAndPan } from './zoomPan';

let data = [];
let x, y, valueline, path, svg, xAxis, parseTime, width, height, margin;
let isFetching = false;
let fetchIntervalId;

export async function renderChart() {
    data = await getData();

    margin = { top: 20, right: 20, bottom: 30, left: 50 };
    width = 960 - margin.left - margin.right;
    height = 500 - margin.top - margin.bottom;

    parseTime = d3.isoParse;

    x = d3.scaleTime().range([0, width]);
    y = d3.scaleLinear().range([height, 0]);

    valueline = d3.line()
        .x(d => x(parseTime(d.date)))
        .y(d => y(d.value));

    svg = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain(d3.extent(data, d => parseTime(d.date)));
    y.domain([0, d3.max(data, d => d.value)]);

    path = svg.append("path")
        .data([data])
        .attr("class", "line")
        .attr("d", valueline);

    xAxis = svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    svg.append("g")
        .call(d3.axisLeft(y));

    addZoomAndPan(svg, x, xAxis, y, valueline, path, data, parseTime, width, height, margin);
}

export async function toggleDataFetching() {
    if (!isFetching) {
        isFetching = true;
        console.log('Data fetching started.');
        fetchIntervalId = setInterval(fetchData, 100); // Fetch data every 0.100 seconds
    } else {
        isFetching = false;
        console.log('Data fetching stopped.');
        clearInterval(fetchIntervalId);
    }
}

async function fetchData() {
    const newData = await fetchDataFromDatabase();
    data.push(...newData);

    x.domain(d3.extent(data, d => parseTime(d.date)));
    y.domain([0, d3.max(data, d => d.value)]);
    xAxis.call(d3.axisBottom(x));
    path.datum(data)
        .attr("d", valueline);
}
