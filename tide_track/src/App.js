import './css/App.css';
import MainContainer from "./components/portal/MainContainer";
import {useState} from "react";

function App() {

  const [portalState, setPortalState] = useState("portal");

  let displayPage;

  switch (portalState) {

    case "portal":
      displayPage = <MainContainer />;
      break;
    case "shipping history":
      displayPage = <p>shipping history</p>;
      break;
    default:
      displayPage = <p>An error has occurred</p>;
      break;

  }

  return (
      displayPage
  );

}

export default App;
