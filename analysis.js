const analyze = (arr) => ({
  average:
    arr.reduce((acc, nxt) => {
      acc += nxt;
      return acc;
    }) / arr.length,
  min: Math.min(...arr),
  max: Math.max(...arr),
  length: arr.length,
});

export default analyze;
