import React from 'react'
import L from 'leaflet'
import { Marker } from 'react-leaflet'

import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import icon from 'leaflet/dist/images/marker-icon.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

const MarkerPos = ({data}) => {
    console.log(data)
    const tams = data.map(item =>
        <Marker position={[item.lat,item.long]}
        icon= {DefaultIcon}></Marker>
        )
        return (
            <>
            {tams}
            </>
        )
}

export default MarkerPos