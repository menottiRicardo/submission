import React from "react";

const Person = ({ name, number, onClick }) => {
  return (
    <>
      <span>
        {name} {number}
      </span>
      <button onClick={onClick}>delete</button>
      <br />
    </>
  );
};

export default Person;
