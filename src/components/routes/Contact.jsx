import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Markup } from 'interweave';


const Contact = ({ website, google} ) => {  
    return (
        <div className="text-left info padding-bottom">
            <h1 className="">&nbsp;</h1>
            <Markup content={website.contact} className="content" />
            <Map google={google} 
                zoom={website.zoom} className='googleMap'
                initialCenter={{
                    lat: website.lat,
                    lng: website.lng
                }}>
                    <Marker
                        title={website.name}
                        name={website.name}
                        position={{lat: website.lat, lng: website.lng}} />
            </Map>
        </div>
    );
}
export default GoogleApiWrapper(
    (props) => ({
      apiKey: '',
      language: 'fr',
    }
  ))(Contact);