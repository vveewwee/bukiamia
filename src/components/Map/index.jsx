import React from "react";
import { createRoot } from "react-dom/client";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
const API_KEY = globalThis.GOOGLE_MAPS_API_KEY ?? "YOUR_API_KEY";

export default function Map(){
    return(
        <APIProvider
        solutionChannel="GMP_devsite_samples_v3_rgmbasicmap"
        apiKey={API_KEY}
      >
        <Map
          defaultZoom={8}
          defaultCenter={{ lat: 38.014815815726, lng: 23.78484420927859 }}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
      </APIProvider>   
    )
}