import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./Section4.css";
import Form from "../../../Form/Form";

export default function Section4() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAtfcf0WXTD8FYR1qAjYFCjJH7uRCHvi9g",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="sec4-container">
      <div className="msg-container">
        <div className="snd_msg">
          <h1 className="sndMsg-h1">Send Us A Message</h1>
          <div className="sndMsg-form">
            <Form />
          </div>
          <button className="sndMsg-btn"></button>
        </div>
      </div>
      <div className="mapDiv">
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
        >
          <Marker key={1} position={center} />
        </GoogleMap>
      </div>
    </div>
  );
}
