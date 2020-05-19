const reverseString = (str) => {
  if (typeof str === 'string') {
    return str.split('').reverse().join('');
  }
  const err = new Error('not a string');
  return err.message;
};

export default reverseString;
