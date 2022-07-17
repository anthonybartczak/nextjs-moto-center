import * as React from "react";
import GoogleMapReact from 'google-map-react';

export default function Map() {

    require('dotenv').config()

    var googleKey:string = process.env.NEXT_PUBLIC_GOOGLE_API_KEY!
    const env = process.env.NODE_ENV
    if (env == "development") {
        googleKey = ''
    }

    const defaultProps = {
        center: {
          lat: 51.0833587,
          lng: 17.0628431
        },
        zoom: 15
    };

    const renderMarkers = (map:any , maps:any) => {
        let marker = new maps.Marker({
            position: defaultProps.center,
            map,
            title: 'Serwis 4x4'
        });
        return marker;
    };

    return (
        <section style={{ height: '60vh', width: '100%' }}>
            <GoogleMapReact
                yesIWantToUseGoogleMapApiInternals
                bootstrapURLKeys={{ key: googleKey}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
            >
            </GoogleMapReact>
        </section>
    );
}