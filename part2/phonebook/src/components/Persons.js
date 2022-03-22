import React from "react";
import Person from "./Person";

const Persons = ({ persons, deletePerson }) => {
  return (
    <>
      {persons.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          number={person.number}
          onClick={() => deletePerson(person.id)}
        />
      ))}
    </>
  );
};

export default Persons;
