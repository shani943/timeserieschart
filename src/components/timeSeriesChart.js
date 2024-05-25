import React, { useEffect, useRef } from "react";
import FetchData from "./fetchData"; // calls data from  components/FetchData
import * as d3 from "d3"; // importing d3
import * as Plot from "@observablehq/plot";

const TimeSeriesChart = () => {
  const data = FetchData();
  const svgRef = useRef();

  useEffect(() => {
    if (!data) return; // Exit early if data is null

    const margin = { top: 20, right: 30, bottom: 30, left: 60 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

    // assinging rectangular box to graph to zoom and pan.
    const view = svg
      .append("rect")
      .attr("class", "view")
      .attr("x", 10)
      .attr("y", 10)
      .attr("width", width + 1)
      .attr("height", height + 1)
      .attr("viewBox", [0, 0, width, height]);

    // Declare the x (horizontal position) scale.
    const x = d3
      .scaleUtc(
        d3.extent(data, (d) => d.Year),
        [margin.left, width - margin.right],
      )

      .domain(d3.extent(data, (d) => new Date(d[0])))
      .range([0, width]);

    const xAxis = d3.axisBottom(x); // set x-axis.

    // Declare the y (vertical position) scale.
    const y = d3
      .scaleLinear(
        [0, d3.max(data, (d) => d.Temperature)],
        [height - margin.bottom, margin.top],
      )
      .range([height, 0])
      .domain([d3.min(data, (d) => +d[1]), d3.max(data, (d) => +d[1])])
      .range([height, 0]);

    const yAxis = d3.axisRight(y); // set y-axis.

    // // creating x-axis and y-axis.
    const gX = svg.append("g").attr("class", "axis axis--x").call(xAxis);
    const gY = svg.append("g").attr("class", "axis axis--y").call(yAxis);

    // Plot.plot({
    //   color: { legend: true },
    //   marks: [
    //     Plot.ruleY([0]),
    //     Plot.lineY(data, { x: "Year", y: "Temperature", stroke: "Steelblue" }),
    //   ],
    // });

    // const line = d3
    //   .line()
    //   .x((d) => x(d.Year))
    //   .y((d) => y(d.Temperature));
    // svg
    //   .append("path")
    //   .attr("fill", "none")
    //   .attr("stroke", "steelblue")
    //   .attr("stroke-width", 1.5)
    //   .attr("d", line(data));

    // assigning zoom nature to one extent so that it can't go to infinte zoomBehaviour.
    const zoom = d3
      .zoom()
      .scaleExtent([1, 40])
      .translateExtent([
        [-50, -50],
        [width + 90, height + 100],
      ])
      .filter(filter)
      .on("zoom", zoomed);

    return Object.assign(svg.call(zoom).node(), { reset });

    // it allow to zoom the entire x-axis and y-axis.
    function zoomed({ transform }) {
      view.attr("transform", transform);
      gX.call(xAxis.scale(transform.rescaleX(x)));
      gY.call(yAxis.scale(transform.rescaleY(y)));
      svg.select("path").attr("transform", transform.toString());
    }

    // this functon will reset the zoom to its original value.
    function reset() {
      svg.transition().duration(700).call(zoom.transform, d3.zoomIdentity);
    }
    // prevent scrolling then apply the default filter
    function filter(event) {
      event.preventDefault();
      return !event.ctrlKey || event.type === "wheel";
    }
  }, [data]);

  // Render null if data is not yet available
  if (!data) {
    return null;
  }

  return <svg ref={svgRef}></svg>;
};

export default TimeSeriesChart; // this export will be called in app.js for rendering.
