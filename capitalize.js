const capitalizeString = (str) => {
  if (typeof str === 'string') {
    const getFirstLetter = str.charAt(0).toUpperCase();
    const getTheRest = str.slice(1, str.length);
    return getFirstLetter.concat(getTheRest);
  }
  const error = new Error('not a string');
  return error.message;
};

export default capitalizeString;
