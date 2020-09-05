import * as React from 'react';
import './app.css';
import List from './components/List/List';
import coops from '../static/entities.json';
import Filters from './components/Filters/Filters';
import Map from './components/Map/Map';

export default function App() {
  const [data, setData] = React.useState(coops); // Data state

  const filterByParams = (ary, { query, city }) => {
    let newData = ary;

    if (query) {
      newData = newData.filter((row) => row.name.indexOf(query) > -1);
    }

    return newData;
  };

  const handleFilterChange = (params) => {
    const newData = filterByParams(coops, params);

    setData(newData);
  };

  return (
    <div className="search-container">
      <div className="left">
        <Filters onChange={handleFilterChange} />
        <List data={data} />
      </div>
      <div className="right">
        <Map data={data} isMarkerShown />
      </div>
    </div>
  );
}
