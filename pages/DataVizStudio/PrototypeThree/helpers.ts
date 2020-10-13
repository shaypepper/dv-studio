import jsonData from "./data";

export const normalize = (m, M) => (x) => (x - m) / (M - m);

export const transformData = ({ data, interval }) => {
  const cleanData = data
    .slice()
    .sort((a, b) => {
      if (a.dateTimeIso < b.dateTimeIso) return -1;
      if (a.dateTimeIso == b.dateTimeIso) return 0;
      if (a.dateTimeIso > b.dateTimeIso) return 1;
    })
    .map((d) => ({
      x: new Date(d.dateTimeIso).getTime(),
      y: d.value,
      ...d,
    }));

  const maxY = cleanData.reduce((acc, d) => {
    return acc < d.y ? d.y : acc;
  }, 0);

  const getNormalizedX = normalize(
    new Date(jsonData.minDateTime).getTime(),
    new Date(jsonData.maxDateTime).getTime()
  );

  const getNormalizedY = normalize(0, maxY);

  return {
    cleanData,
    maxY,
    getNormalizedX,
    getNormalizedY,
    interval,
  };
};
