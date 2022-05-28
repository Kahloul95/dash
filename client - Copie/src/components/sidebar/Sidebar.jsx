import {
  Public,
  Sms,
  ListAlt,
  SportsEsports,
  FlightTakeoff,
  SignalCellularNoSim,
  Settings,
  Home
  
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashbord</h3>
          <ul className="sidebarList">
          <Link to="/" className="link">
            <li className="sidebarListItem ">
              <Home className="sidebarIcons"/>
              Home
            </li>
            </Link>
            <Link to="/news" className="link">
            <li className="sidebarListItem">
              <Public className="sidebarIcons"/>
              News
            </li>
            </Link>
            <Link to="/avis" className="link">
            <li className="sidebarListItem">
              <Sms className="sidebarIcons"/>
              Avis
            </li>
            </Link>
            <Link to="/concour" className="link">
            <li className="sidebarListItem">
              <ListAlt className="sidebarIcons"/>
              Concours
            </li>
            </Link>
            <Link to="/users" className="link">
            <li className="sidebarListItem">
              <SportsEsports className="sidebarIcon" />
              Jeux
            </li>
            </Link>
            <Link to="/products" className="link">
            <li className="sidebarListItem">
              <FlightTakeoff className="sidebarIcon"/>
              Transports
            </li>
            </Link>
            <Link to="/signalement" className="link">
            <li className="sidebarListItem">
              <SignalCellularNoSim className="sidebarIcon"/>
              Signalement
            </li>
            </Link>
            <Link to="/gestion" className="link">
            <li className="sidebarListItem">
              <Settings className="sidebarIcon" />
              Gestion des comptes
            </li>
            </Link>
          </ul>
          </div>
      </div>
    </div>
  ) 
}

