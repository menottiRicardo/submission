import React from "react";

const Total = ({ parts }) => {
  return (
    <h3>
      total of
      {parts.reduce((sum, value) => sum + value.exercises, 0)}
    </h3>
  );
};

export default Total;
