const calculator = (() => {
  const add = (...args) => args.reduce((acc, next) => {
    acc += next;
    return acc;
  });

  const subtract = (...args) => args.reduce((acc, next) => {
    acc -= next;
    return acc;
  });

  const multiply = (...args) => args.reduce((acc, next) => {
    acc *= next;
    return acc;
  });

  const divide = (...args) => args.reduce((acc, next) => {
    acc /= next;
    return acc;
  });

  return {
    add, subtract, multiply, divide,
  };
})();

export default calculator;
