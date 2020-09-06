import * as React from 'react';
import './List.css';
import { Link } from '@reach/router';

export default function List({ data }) {
  return (
    <ul className="list">
      {data.map((coop) => (
        <li key={coop.id}>
          <div>
            <Link to={`/details/${coop.id}`}>{coop.name}</Link>
            <div className="text-description">{coop.description}</div>
            <div className="text-mute">{`${coop.category} - ${coop.city}`}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
