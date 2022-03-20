import React from "react";
import Part from "./part";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.name} title={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

export default Content;
