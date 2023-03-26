import {GoogleMap, useLoadScript, MarkerF, InfoWindow, LoadScript} from "@react-google-maps/api";
import { useMemo, useState } from "react"; // cache calculations between re-renders
import floraLogo from "public/Flora_Physiotherapie.svg"
import Blob from "buffer"
import Script from "next/script";

export default function Map({...props}){

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
      });
    
    const mapCenter = useMemo(
        () => ({ lat: 47.138568697122636, lng: 7.249745541680579 }),
        []
      );
    
    // const mapOptions = useMemo<google.maps.MapOptions>(
    // () => ({
    //     disableDefaultUI: true,
    //     clickableIcons: true,
    //     scrollwheel: false,
    // }),
    // []
    // );

    const markerIcon = {
        path:
          'M256 0C156.8 0 76.8 80 76.8 179.2c0 53.2 22.4 101.6 57.6 134.4l108.8 108.8c3.2 3.2 7.2 4.8 11.2 4.8s8-1.6 11.2-4.8l108.8-108.8c35.2-32.8 57.6-81.2 57.6-134.4C435.2 80 355.2 0 256 0zm0 272c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z',
        fillColor: '#FF0000',
        fillOpacity: 1,
        strokeWeight: 0,
        scale: 0.06
      };

    //   const markerIcon2 = {
    //     url: "/logoMiddle.svg",
    //     scaledSize: new google.maps.Size(50, 50), // scaled size
    //     origin: new google.maps.Point(0,0), // origin
    //     anchor: new google.maps.Point(0, 0) // anchor
    //     // scaledSize: new window.google.maps.Size(30, 30),
    //     // origin: new window.google.maps.Point(0, 0),
    //     // anchor: new window.google.maps.Point(15, 30),
    //     // labelOrigin: new window.google.maps.Point(15, 10)
    //   };

    const styleArr = {
        styles: [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#0066ff"
                    },
                    {
                        "saturation": 74
                    },
                    {
                        "lightness": 100
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "weight": 0.6
                    },
                    {
                        "saturation": -85
                    },
                    {
                        "lightness": 61
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#5f94ff"
                    },
                    {
                        "lightness": 26
                    },
                    {
                        "gamma": 5.86
                    }
                ]
            }
        ]}

    const [infoOpen, setInfoOpen] = useState(false);

    if (!isLoaded) {
    return <p>Loading...</p>;
    }

    return(
        <div {...props}>
            <GoogleMap
            options={styleArr}
            zoom={16}
            center={mapCenter}
            // mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerClassName = "map-container"
            mapContainerStyle={{ width: '500px', height: '500px' }}
            onLoad={() => console.log('Map Component Loaded...')}
            
        >
            <MarkerF position={mapCenter} /*icon={markerIcon}*/ onClick={() => setInfoOpen(true)} onLoad={() => console.log('Marker Loaded')} />
            {infoOpen && (
            <InfoWindow position={mapCenter} onCloseClick={() => setInfoOpen(false)}>
                <div>Physiotherapie Flora</div>
            </InfoWindow>
            )}
        </GoogleMap>
        </div>
    )
}

    
