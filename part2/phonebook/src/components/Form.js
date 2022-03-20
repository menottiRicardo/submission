import React from "react";

const Form = ({ newName, newNumber, changeName,changeNumber, onClick  }) => {
  return (
    <form>
      <div>
        name:{" "}
        <input
          value={newName}
          onChange={changeName}
        />
      </div>
      <div>
        number:{" "}
        <input
          value={newNumber}
          onChange={changeNumber}
        />
      </div>
      <div>
        <button type="submit" onClick={onClick}>
          add
        </button>
      </div>
    </form>
  );
};

export default Form;
