// src/components/zoomPan.js

import * as d3 from 'd3';

export function addZoomAndPan(svg, x, xAxis, y, valueline, path, data, parseTime, width, height, margin) {
    const zoom = d3.zoom()
        .scaleExtent([1, 100])
        .translateExtent([[-width, -Infinity], [2 * width, Infinity]])
        .on("zoom", zoomed);

    svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .style("fill", "none")
        .style("pointer-events", "all")
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .call(zoom);

    function zoomed(event) {
        const transform = event.transform;
        const newX = transform.rescaleX(x);

        xAxis.call(d3.axisBottom(newX));
        path.attr("d", valueline.x(d => newX(parseTime(d.date))));
    }
}
