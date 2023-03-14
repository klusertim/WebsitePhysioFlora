import { AspectRatio, Flex, Title, createStyles } from '@mantine/core';
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";
import { useMemo } from 'react';


const useStyles = createStyles((theme) => ({
    mapContainer: {
      position: "relative",
      
    }
}));


export default function LocationMap() {

  const {classes} = useStyles();

  // Initialize and add the map
// function initMap(): void {
//   // The location of Uluru
//   const uluru = { lat: -25.344, lng: 131.031 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(
//     document.getElementById("map") as HTMLElement,
//     {
//       zoom: 4,
//       center: uluru,
//     }
//   );

//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }

// declare global {
//   interface Window {
//     initMap: () => void;
//   }
// }
// window.initMap = initMap;

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

    if(!isLoaded) return <div>Loading ...</div>
    return <Map/>
}

function Map(){

  const {classes} = useStyles();
  const center = useMemo(() => ({lat: 47.138568697122636, lng: 7.249745541680579}), []);

  return (
    <Flex w="50%" h="50%" className={classes.mapContainer}>
      <AspectRatio ratio={16 / 9} >
        <GoogleMap zoom = {15} center= {center} mapContainerClassName = "map-container">
          <MarkerF position={{lat: 47.138568697122636, lng: 7.249745541680579}}/>
        </GoogleMap>
      </AspectRatio> 
    </Flex>
  );
}