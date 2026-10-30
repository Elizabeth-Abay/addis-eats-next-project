// the location of the sites need not be hard coded
'use client'

import { useEffect } from "react";
import { MapContainer , Marker, TileLayer , Popup , useMap} from "react-leaflet";

function MapController({ targetLocation }) {
    const map = useMap(); // <--- Accesses the Leaflet map instance directly


    // useMap - will provide descendant of a MapContainer
    let finalLoc = [targetLocation.lat , targetLocation.lng]

    useEffect(
        () => {
            // console.log("The final location passed to controller");
            // console.log(finalLoc)

            let dddd = [ 9.67 , 9.7]
            // Example A: Move the map whenever targetLocation changes
            if (dddd) {
                // map.setView(center, zoom) or map.flyTo(center, zoom) for a smooth animation
                map.flyTo(dddd, 15, {
                    duration: 1.5 // Animation duration in seconds
                });
            }
        }
        , [ map , targetLocation]
    )

    return null; // This component doesn't need to render any HTML/JSX itself
}


export default function Map({userLocation}){

    // console.log(userLocation)

    // if (userLocation.length === 0) return alert("Couldn't find the user location")

    // else means u got the location
    // start showing the user starting from that
    // the tileLayer will only create the center once and call it a day 
    // thus to keep it dynamic we use props to pass the information

    // except its children map container children are immutable
    // children

    return (
        <MapContainer center={userLocation} zoom={14} style={{ height : "500px" , width : "600px"}}>
            {/* tileLayer will fetch and display the graphics */}
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
                <MapController targetLocation={userLocation} />

                <Popup> Your location </Popup>


        </MapContainer>
    )
    

}