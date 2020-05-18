const capitalizeString = (str) => {
  const getFirstLetter=str.charAt(0).toUpperCase();
  const getTheRest = str.slice(1,str.length);
  return getFirstLetter.concat(getTheRest);
}

export default capitalizeString