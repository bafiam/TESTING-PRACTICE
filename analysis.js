const analyze = (arr) => {
  return {
    average: arr.reduce((acc, nxt) => (acc += nxt)) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

export default analyze;
