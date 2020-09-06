import * as React from 'react';
import axios from 'axios';
import './Details.css';
import Loading from '../components/Loading';

export default function Details({ coopId }) {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  function fetchCoopById(id) {
    setLoading(true);

    axios
      .get('http://localhost:3000/coops', {
        params: {
          id,
        },
      })
      .then((response) => response.data)
      .then(([responseData]) => {
        setTimeout(() => {
          setData(responseData);
          setLoading(false);
        }, 1000);
      });
  }

  React.useEffect(() => {
    fetchCoopById(coopId);
  }, []);

  if (loading || !data) {
    return <Loading />;
  }

  return (
    <div className="details-container">
      <a onClick={() => window.history.back()}>Retour</a>
      <h1>Details</h1>
      <div>
        <div className="text-name">{data.name}</div>
        <div className="text-description">{data.description}</div>
        <div className="text-mute">{`${data.category} - ${data.city}`}</div>
      </div>
    </div>
  );
}
