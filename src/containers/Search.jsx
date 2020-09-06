import * as React from 'react';
import './Search.css';
import { navigate, useLocation } from '@reach/router';
import qs from 'qs';
import axios from 'axios';
import List from '../components/List/List';
import Filters from '../components/Filters/Filters';
import Loading from '../components/Loading';
import Map from '../components/Map/Map';
import toUrlParams from '../common/toUrlParams';
import sanitizeParams from '../common/sanitizeParams';

export default function Search() {
  const location = useLocation();
  const queryParams = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  function fetchCoops(params) {
    setLoading(true);

    axios
      .get('http://localhost:3000/coops', {
        params,
      })
      .then((response) => response.data)
      .then((responseData) => {
        setTimeout(() => {
          setData(responseData);
          setLoading(false);
        }, 1000);
      });
  }

  React.useEffect(() => {
    fetchCoops(sanitizeParams(queryParams));
  }, []);

  const handleFilterChange = (params) => {
    const url = toUrlParams(params);

    navigate(url);
    fetchCoops(sanitizeParams(params));
  };

  return (
    <div className="search-container">
      <div className="left">
        <Filters onChange={handleFilterChange} queryParams={queryParams} />
        {loading ? <Loading /> : <List data={data} />}
      </div>
      <div className="right">{loading ? <Loading /> : <Map data={data} />}</div>
    </div>
  );
}
