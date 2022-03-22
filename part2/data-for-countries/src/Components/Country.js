import React, { useState } from "react";
import CountryDetail from "./CountryDetail";
import Weather from "./Weather";

export const Country = ({ name, data, single }) => {
  const [show, setShow] = useState(false);
  const { flags, languages, area, capital, latlng } = data;

  
  if (single) {
    return (
      <>
        <CountryDetail
          name={name}
          area={area}
          capital={capital[0]}
          languages={languages}
          img={flags.png}
        />

        <Weather lat={latlng[0]} lon={latlng[1]} name={name} />
      </>
    );
  }

  if (show === false) {
    return (
      <div style={{ marginBottom: 3 }}>
        <span>{name}</span>
        <button onClick={() => setShow(true)}>show</button>
      </div>
    );
  }
  return (
    <>
      <CountryDetail
        name={name}
        area={area}
        capital={capital[0]}
        languages={languages}
        img={flags.png}
      />
      <Weather lat={latlng[0]} lon={latlng[1]} name={name} />
    </>
  );
};
