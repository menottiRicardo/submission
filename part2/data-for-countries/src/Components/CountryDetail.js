import React from "react";

const CountryDetail = ({ name, capital, area, languages, img }) => {
  const languagesList = Object.values(languages);
  return (
    <>
      <h1>{name}</h1>
      <p>capital {capital[0]}</p>
      <p>area {area}</p>
      <h3>languages</h3>
      <ul>
        {languagesList.map((lan) => (
          <li key={lan}>{lan}</li>
        ))}
      </ul>
      <img src={img} alt="flag" />
    </>
  );
};

export default CountryDetail;
