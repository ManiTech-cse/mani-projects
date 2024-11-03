import React, { useState, } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const BuyNowComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  const handleBuyNow = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setError(null);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setError("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              setError("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              setError("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              setError("An unknown error occurred.");
              break;
            default:
              setError("An unknown error occurred.");
          }
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: latitude || 0,
    lng: longitude || 0,
  };

  return (
    <div>
      <button onClick={handleBuyNow} className="btn btn-primary">
        Buy Now
      </button>

      {error && <p>Error: {error}</p>}

      {latitude && longitude ? (
        <LoadScript
          googleMapsApiKey="YOUR_ACTUAL_GOOGLE_MAPS_API_KEY"
          onLoad={() => console.log("Google Maps API loaded successfully")}
          onError={() => setError("Error loading Google Maps API")}
        >
          <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
      ) : (
        <p>Waiting for location...</p>
      )}
    </div>
  );
};

export default BuyNowComponent;
