import * as React from 'react';
import './List.css';

export default function List({ data }) {
  return (
    <ul className="list">
      {data.map((coop) => (
        <li key={coop.id}>
          <div>
            <div className="text-name">{coop.name}</div>
            <div className="text-description">{coop.description}</div>
            <div className="text-mute">{`${coop.category} - ${coop.city}`}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
