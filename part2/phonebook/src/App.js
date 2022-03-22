import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addNewName = (event) => {
    event.preventDefault();
    const namesArray = persons.map((person) => person.name);
    const check = namesArray.includes(newName);
    if (check) {
      alert(`${newName} is already added to the phonebook`);
      setNewName("");
      return;
    }

    setPersons(
      persons.concat({
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      })
    );
  };

  const personsToShow = persons.filter(
    (person) => person.name.indexOf(filter) > -1
  );

  useEffect(async () => {
    const { data, ...restOfIt } = await axios.get(
      "http://localhost:3001/persons"
    );
    setPersons(data);
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        filter={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      <h2>add a new</h2>
      <Form
        newName={newName}
        newNumber={newNumber}
        changeName={(event) => setNewName(event.target.value)}
        changeNumber={(event) => setNewNumber(event.target.value)}
        onClick={addNewName}
      />

      <h2>Numbers</h2>

      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
