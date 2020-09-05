import * as React from 'react';
import cities from '../../../static/cities.json';
import './Filters.css';

export default function Filters({ onChange }) {
  const [query, setQuery] = React.useState(''); // UI State
  const [city, setCity] = React.useState(''); // Hooks

  const handleQueryChange = (value) => {
    setQuery(value);
    onChange({ query: value, city }); // Atomicity
  };

  const handleSelectChange = (value) => {
    setCity(value);
    onChange({ city: value, query });
  };

  return (
    <div className="filters-container">
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
    </div>
  );
}
