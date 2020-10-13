import React from "react";
import jsonData from "./data";
import { transformData } from "./helpers";

const Sparkline = ({ height, width, padding = 10 }) => {
  const { cleanData, getNormalizedX, getNormalizedY, interval } = transformData(
    jsonData
  );
  const dataForChart = cleanData.map((d) => {
    return {
      cx: padding + getNormalizedX(d.x) * (width - 2 * padding),
      cy: padding + height - getNormalizedY(d.y) * (height - 2 * padding),
      key: d.dateTimeIso,
      ...d,
    };
  });

  let dValueForPath = `M ${dataForChart[0].cx},${dataForChart[0].cy}`;
  let previousX = dataForChart[0].x;

  for (let i = 1; i < dataForChart.length; i++) {
    const d = dataForChart[i];

    const currentX = d.x;
    const pathCommand = currentX - previousX > interval ? "M" : "L";
    dValueForPath += `${pathCommand} ${d.cx} ${d.cy}`;

    previousX = currentX;
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.508301" width={width} height={height} fill="#E2E2E2" />
      {dataForChart.map((d) => (
        <circle key={d.key} r="5" cx={d.cx} cy={d.cy} fill="mediumpurple" />
      ))}
      <path d={dValueForPath} stroke="black" strokeWidth="2"></path>
    </svg>
  );
};

export default Sparkline;
