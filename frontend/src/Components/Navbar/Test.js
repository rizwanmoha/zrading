// import "./styles.css";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsAlt,
  faExpandArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const handle = useFullScreenHandle();

  return (
    <div className="App">
      <button onClick={handle.enter}>
        <FontAwesomeIcon icon={faExpandArrowsAlt} />
        <i className="fa fa-expand"></i>
      </button>

      <FullScreen handle={handle}>
        <div
          style={{
            background: "#233",
            padding: 20,
            marginTop: 20,
            color: "#fff",
          }}
        >
          {handle.active && (
            <button onClick={handle.exit}>
              <FontAwesomeIcon icon={faArrowsAlt} />
            </button>
          )}
          <h1>Hello React Full Screen Example</h1>
          <h2>
            Just click on expand button to make full screen
            <br />
          </h2>
        </div>
      </FullScreen>
    </div>
  );
}
