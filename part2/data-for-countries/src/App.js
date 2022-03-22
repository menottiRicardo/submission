import { useEffect, useState } from "react";
import axios from "axios";
import { Country } from "./Components/Country";
const App = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);

  const getCountries = async (value) => {
    setCountry(value);

    // filter them
    const toShow = countries.filter(
      (country) =>
        country.name.common
          .toLowerCase()
          .indexOf(value.toLowerCase()) > -1
    );
    setCountriesToShow(toShow);
  };

  useEffect(async () => {
    const { data, ...restOfIt } = await axios.get(
      "https://restcountries.com/v3.1/all"
    );
    setCountries(data);
    console.log(data);
  }, []);

  return (
    <div className="App">
      <input
        value={country}
        onChange={(event) => getCountries(event.target.value)}
      />
      
      {countriesToShow.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : countriesToShow.length !== 1 ? (
        countriesToShow.map((country) => (
          <Country
            key={country.area}
            data={country}
            name={country.name.common}
          />
        ))
      ) : (
        countriesToShow.map((country) => (
          <Country
            key={country.area}
            name={country.name.common}
            data={country}
            single={true}
          />
        ))
      )}
    </div>
  );
};

export default App;
