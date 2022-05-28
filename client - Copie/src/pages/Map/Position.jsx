import React , {useState} from 'react'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './map.css'
import { MapContainer, TileLayer,Marker,Popup, useMapEvents, Tooltip, } from 'react-leaflet';

//1
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const Position = ({childToParent}) => {
    const [position, setPosition] = useState (null);
    const [data, setData] = useState ({
      lat : "",
      lng : "",
    }); 

     /// events

  const   HandleClickMap = () => {
    const map = useMapEvents ({
      click (e) {
         //  console.log(e.latlng) 
         setPosition(e.latlng)
         map.flyTo(e.latlng);
 
      
         // Send data to parent component on mouse move on the map
         childToParent(e.latlng)
 
      },
    });
    return position == null
    ? null
    : <Marker position = {position}></Marker>;
   };
   const HandleMouseMove = () => {
     const map = useMapEvents ({
       mousemove(e){
         // console.log(e.latlng);
         setData({
           ...data,
           lat : e.latlng.lat,
           lng : e.latlng.lng,
         });
 
         },
     });
     return null 
   };
 
  return (
    <div className='mps'>
        <h1>Position Lat:{data.lat} <br/>
        Lng:{data.lng}</h1>
        
        <MapContainer className="mapContainer" center={[34.39520097991745,8.62758630886674]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <HandleClickMap/>
        <HandleMouseMove/>
        <Marker position={[34.4, 8.7]} icon={DefaultIcon}>
          <Popup>
            A pretty CSS3 popup
          </Popup>
          <Tooltip >cyber park</Tooltip>
        </Marker>
      </MapContainer>

    </div>
    
  )
}

export default Position