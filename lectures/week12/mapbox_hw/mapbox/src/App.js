import './App.css';
import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

function App() {

  const [viewport, setViewport] = useState({
    latitude: 29.7589382,
    longitude: -95.3676974,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })

  return (
        <>
        <ReactMapGL {...viewport} mapboxApiAccessToken={ProcessingInstruction.env.REACT_APP_MAPBOX_TOKEN}>
          markers here

        </ReactMapGL>
        </>
  );
}

export default App;
