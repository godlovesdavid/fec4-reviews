import React from 'react';

const getClass = (number, average) => {
  console.log(average)
  let result = 'fit-border ';
  if (number <= 11 && (average - 1) * 25 <= 11) {
    result = 'fit-slider';
  } else if (number >= 90 && (average - 1) * 25 >= 90) {
    result = 'fit-slider';
  } else if (Math.abs(number - ((average - 1) * 25)) <= 5) {
    result = 'fit-slider';
  } else if (number % 50 === 1) {
    result += 'fit-border fit-border-left';
  } else if (number % 50 === 0 || number % 25 === 0) {
    result += 'fit-border fit-border-right';
  }
  return result;
};

const AveragesFitBar = (props) => {
  const classes = { ...props };
  const numbers = Array.from({ length: 100 }, (v, k) => k + 1);
  return (
    <span>
      {numbers.map(number => <div className={getClass(number, classes.average)} />)}
    </span>
  );
};

export default AveragesFitBar;
