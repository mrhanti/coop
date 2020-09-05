import * as React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MapContainer = ({ data }) => (
  <GoogleMap
    defaultZoom={9}
    defaultCenter={{ lat: 31.7811669, lng: -9.3938589 }}
  >
    {data.map((row) => (
      <Marker key={row.id} position={row.location} />
    ))}
  </GoogleMap>
);

export default compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDrrjRrPKWSJ0yhTXzE0xweCzp1YrAs4T0',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(MapContainer);
