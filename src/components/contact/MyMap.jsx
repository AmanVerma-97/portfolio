import React from 'react';
import {Marker, GoogleMap, useLoadScript} from '@react-google-maps/api';
const myAPIKey= 'YOUR - API- KEY';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const libraries = ['places'];

const MyMap = ({ center, zoom }) => {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: myAPIKey,
    libraries,
  });

  if (loadError) {
    console.log("--1");
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    console.log("--2");
    return <div>Loading maps</div>;
  }

  return (
    <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={zoom}
        center={center}
      >
        <Marker position={center} icon={{ url :"https://cdn-icons-png.flaticon.com/128/684/684908.png" }} />
      </GoogleMap>
  );
};

export default MyMap;