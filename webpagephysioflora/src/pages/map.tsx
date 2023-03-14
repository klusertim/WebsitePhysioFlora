import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";
import { useMemo } from "react"; // cache calculations between re-renders

export default function Map(){

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
      });
    

    const mapCenter = useMemo(
        () => ({ lat: 47.138568697122636, lng: 7.249745541680579 }),
        []
      );
    
    const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
        disableDefaultUI: true,
        clickableIcons: true,
        scrollwheel: false,
    }),
    []
    );

    if (!isLoaded) {
    return <p>Loading...</p>;
    }
    
    return(
        <GoogleMap
        options={mapOptions}
        zoom={16}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '800px', height: '800px' }}
        onLoad={() => console.log('Map Component Loaded...')}
      >
        <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
      </GoogleMap>
    )
}