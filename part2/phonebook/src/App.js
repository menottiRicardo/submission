import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";
import axios from "axios";
import phonebookService from "./services/phonebook";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    message: null,
    type: null,
  });

  const addNewName = (event) => {
    event.preventDefault();
    const personExist = persons.filter(
      (person) => person.name === newName
    );
    if (personExist.length !== 0) {
      const message = window.confirm(
        `${personExist[0].name} is already added to the phonebook, replace the old number with a new one?`
      );
      if (!message) return;
      phonebookService
        .update(personExist[0].id, {
          name: newName,
          number: newNumber,
        })
        .then((data) =>
          setPersons(
            persons.map((person) =>
              person.id !== personExist[0].id ? person : data
            )
          )
        );

      setNewName("");
      setNewNumber("");
      setErrorMessage({
        message: `${newName}s number has been changed succesfully`,
        type: "success",
      });
      return;
    }

    phonebookService
      .create({
        name: newName,
        number: newNumber,
      })
      .then((data) => setPersons(persons.concat(data)));

    setErrorMessage({
      message: `Added ${newName}`,
      type: "success",
    });
    setNewName("");
    setNewNumber("");
    return;
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

  const deletePerson = (id) => {
    const person = persons.filter((person) => person.id === id);
    console.log(person);

    const message = window.confirm("Delete");
    if (message === false) return;
    phonebookService
      .eliminate(id)
      .then((data) =>
        setPersons(persons.filter((person) => person.id !== id))
      )
      .catch(() =>
        setErrorMessage({
          message: `Information of ${person.name} has already been removed from server`,
          type: "error",
        })
      );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        message={errorMessage.message}
        type={errorMessage.type}
      />
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

      <Persons persons={personsToShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
