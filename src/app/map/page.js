// this is a csr page
// used to show the sites where
//  addis eats branch is located and also where the customer is located as well
'use client'

import dynamic from "next/dynamic"
import 'leaflet/dist/leaflet.css';
import { useState , useEffect } from "react";
import getUserLocation from "../(utils)/getUserLocation";

const DeliveryMap = dynamic(
    () => import("./components/map"),
    {
        ssr : false,
        loading: () => <div className="h-80 bg-slate-100"/>
    }
)


export default function Page(){

    let [ userLocation , setUserLocation ] = useState({ lat : 30 , lng :  20});
    
    useEffect(()=>{
        let userloc = async () => {
            let locationFound = await getUserLocation();

            console.log("user location is");
            console.log(locationFound)

            if (locationFound.length === 0) return alert('Array returned 0')

            setUserLocation({ lat : locationFound[0] , lng : locationFound[1]})
        }

        userloc()

    }
    ,
        []
    )
    return <DeliveryMap userLocation={userLocation}/>
}