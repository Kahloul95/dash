import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">Now join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
            <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
              <span className="widgetSmUsername">Amna Keller</span>
              <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
              <Visibility/>
              Dispalay
          </button>
            </li>
            <li className="widgetSmListItem">
            <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
              <span className="widgetSmUsername">Amna Keller</span>
              <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
              <Visibility/>
              Dispalay
          </button>
            </li>
            <li className="widgetSmListItem">
            <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
              <span className="widgetSmUsername">Amna Keller</span>
              <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
              <Visibility/>
              Dispalay
          </button>
            </li>
            <li className="widgetSmListItem">
            <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
              <span className="widgetSmUsername">Amna Keller</span>
              <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
              <Visibility/>
              Dispalay
          </button>
            </li>
        </ul>
    </div>

  );
}
