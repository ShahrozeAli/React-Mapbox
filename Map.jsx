import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: <Enter your coordinates>,
    longitude: <Enter your coordinates>,
    width: "100vw",
    height: "100vh",
    zoom: 16
  });
  
  const REACT_APP_MAPBOX_TOKEN = "<Enter your MapBoxkey>";
  const mapStyle = "mapbox://styles/shehroze58/ckjty05wy0snv1apoyfss8neu";

  return (
    <div>
      <ReactMapGL 
        {...viewport}
        mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
        mapStyle={mapStyle}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
      </ReactMapGL>
    </div>
  );
}
