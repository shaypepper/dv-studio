import React, { useState } from "react";
import { line } from "d3-shape";
import { scaleLinear, scaleTime } from "d3-scale";
import { timeParse } from "d3-time-format";
import { extent, bisect, Numeric } from "d3-array";
import { transformData } from "./helpers";
import jsonData from "./data";
import styles from "./SparklineD3.module.css";

type Datum = {
  value?: Numeric;
  dateTimeIso?: string;
};

type Accessor = (Datum) => number;

const SparklineD3 = ({ height, width, padding }) => {
  const [tooltipLine, setTooltipLine] = useState(0);
  const [highlightedPoint, setHighlightedPoint] = useState<Datum>({});
  const { cleanData, interval } = transformData(jsonData);

  const parseTime = timeParse("%Y-%m-%eT%H:%M:%S.%LZ");

  var x = scaleTime()
    .range([0, width])
    .domain([
      parseTime("2020-10-09T04:00:00.000Z"),
      parseTime("2020-10-10T03:59:59.999Z"),
    ]);

  var y = scaleLinear()
    .range([height - padding, padding])
    .domain(extent(cleanData, (d: Datum) => d.value));

  cleanData.forEach((d) => {
    d.date = parseTime(d.dateTimeIso);
  });

  const chartLine = line()
    .x((d: Datum) => x(parseTime(d.dateTimeIso)))
    .y((d: Datum) => y(d.value));

  const handleMouseOver = (el) => {
    const z = bisect(
      cleanData.map((d) => d.date),
      x.invert(el.clientX)
    );
    if (cleanData[z]) {
      setHighlightedPoint(cleanData[z]);
    }
    setTooltipLine(el.clientX);
  };
  const handleMouseLeave = () => {
    setTooltipLine(0);
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseMove={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <rect width={width} height={height} fill="#E2E2E2" />
      {cleanData.map((d) => (
        <circle
          key={d.dateTimeIso}
          r={5}
          cx={x(d.date)}
          cy={y(d.value)}
          fill="mediumpurple"
          stroke={
            d.dateTimeIso === highlightedPoint.dateTimeIso ? "red" : "none"
          }
        />
      ))}
      <path d={chartLine(cleanData)} stroke="black" strokeWidth="2"></path>
      <path
        className={styles.tooltipLine}
        d={`M0,0 V${height}`}
        transform={`translate(${tooltipLine}, 0)`}
        stroke="red"
      ></path>
    </svg>
  );
};

export default SparklineD3;
