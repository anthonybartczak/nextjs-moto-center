import * as React from "react";
import GoogleMapReact from 'google-map-react';

export default function Map() {

    require('dotenv').config()

    var googleKey:string = process.env.NEXT_PUBLIC_GOOGLE_API_KEY!
    const env = process.env.NODE_ENV
    if (env == "development") {
        googleKey = ''
    }

    const AnyReactComponent = ({ text } : any) => <div>{text}</div>;

    const defaultProps = {
        center: {
          lat: 51.0833587,
          lng: 17.0628431
        },
        zoom: 15
    };

    return (
        <section style={{ height: '60vh', width: '100%' }}>
            <GoogleMapReact
                yesIWantToUseGoogleMapApiInternals
                bootstrapURLKeys={{ key: googleKey}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
            <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
            />
            </GoogleMapReact>
        </section>
    );
}