// Display list of countries and their capitals

import classes from "./InterviewCountryList.module.css";
import React, { useEffect, useMemo, useState } from "react";

// Countries and capitals: Fetched from an API
// -> each country a different component
// List filterable by capital

// type Capital = (typeof FILTERABLE_CAPITALS)[number];

// interface Country {
//   name: {
//     common: string;
//   };
//   capital: string;
// }

const BASE_URL = "https://restcountries.com/v3.1";

const FILTERABLE_CAPITALS = [
  "Tallinn",
  "Helsinki",
  "Stockholm",
  "Oslo",
  "Copenhagen",
  "Reykjavik",
];

const InterviewCountryList = () => {
  const [countries, setCountries] = useState(null);
  const [selectedCapital, setSelectedCapital] = useState("all");

  useEffect(() => {
    async function fetchCountries() {
      const countriesFetch = await fetch(`${BASE_URL}/all`);
      const countries = await countriesFetch.json();
      setCountries(countries);
    }

    fetchCountries();

    return setCountries([]);
  }, []);

  let countriesToDisplay = useMemo(() => {
    if (selectedCapital !== "all") {
      return countries.filter((country) => {
        return country.capital == selectedCapital;
      });
    }
    return countries;
  }, [selectedCapital, countries]);

  return (
    <div>
      <select
        onChange={(e) => setSelectedCapital(e.target.value)}
        name="capitalSelect"
        id="capitalSelect"
        className="bg-white"
      >
        <option value="all">All</option>
        {FILTERABLE_CAPITALS.map((capital) => (
          <option key={capital} value={capital}>
            {capital}
          </option>
        ))}
      </select>
      <div className={classes.countryList}>
        {selectedCapital}
        {countriesToDisplay !== null &&
          countriesToDisplay.length > 0 &&
          countriesToDisplay.map((country) => {
            return (
              <Country
                key={country.name.common}
                name={country.name.common}
                capital={country.capital}
              />
            );
          })}
      </div>
    </div>
  );
};

const Country = ({ name, capital }) => {
  return (
    <div className={classes.country}>
      Name: {name} - Capital: {capital}
    </div>
  );
};

export default InterviewCountryList;
