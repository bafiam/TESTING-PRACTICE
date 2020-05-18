const calculator = (() => {
  const add = (...args) => {
    return args.reduce((acc, next) => {
      return (acc = acc + next);
    });
  };

  const subtract = (...args) => {
    return args.reduce((acc, next) => {
      return (acc = acc - next);
    });
  };

  const multiply = (...args) => {
    return args.reduce((acc, next) => {
      return (acc = acc * next);
    });
  };

  const divide = (...args) => {
    return args.reduce((acc, next) => {
      return (acc = acc / next);
    });
  };

  return { add, subtract, multiply, divide };
})();

export default calculator;
