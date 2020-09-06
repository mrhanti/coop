import * as React from 'react';
import cities from '../../static/cities.json';
import './Home.css';

export default function Home({ navigate }) {
  const [query, setQuery] = React.useState(''); // UI State
  const [city, setCity] = React.useState(''); // Hooks

  const handleQueryChange = (value) => {
    setQuery(value);
  };

  const handleSelectChange = (value) => {
    setCity(value);
  };

  const handleSearch = () => {
    navigate(
      `/search?query=${encodeURIComponent(query)}&city=${encodeURIComponent(
        city
      )}`
    );
  };

  return (
    <div className="home-container">
      <div className="home-jumbotron">
        <div>
          <h1>Selectionnez les critères de recherche</h1>
        </div>
        <div className="field-group">
          <div className="field">
            <input
              className="text-input"
              value={query}
              placeholder="e.g. huile"
              type="text"
              onChange={($e) => handleQueryChange($e.target.value)}
            />
          </div>
          <div className="field">
            <span>Ville: </span>
            <select
              value={city}
              className="select-input"
              onChange={($e) => handleSelectChange($e.target.value)}
            >
              <option value="-1">Selectionnez</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <button
              className="submit-button"
              type="button"
              onClick={handleSearch}
            >
              Chercher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
