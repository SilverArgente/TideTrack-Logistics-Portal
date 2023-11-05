import './css/App.css';
import {useEffect, useState} from "react";
import MainContainer from "./components/portal/MainContainer";
import EditRoutes from "./components/edit_routes/EditRoutes";
import AddRoutes from "./components/edit_routes/AddRoutes";
import { RouteProvider } from "./context/RouteContext.js";

function App() {

  const [portalState, setPortalState] = useState("portal");

  let displayPage;

  function toPortal() {
    setPortalState("portal");
  }

  function toShippingHistory() {
    setPortalState("shipping history");
  }

  function toEditRoutes() {
    setPortalState("edit routes")
  }

  function toCreateRoutes() {
    setPortalState("create routes");
  }

  switch (portalState) {

    case "portal":
      displayPage = <MainContainer
          changeToShippingHistory={toShippingHistory}
          changeToEditRoutes={toEditRoutes}
        />;
      break;
    case "edit routes":
      displayPage = <EditRoutes backToPortal={toPortal} changeToCreateRoutes={toCreateRoutes}/>
      break;
      case "create routes":
        displayPage = <AddRoutes backToPortal={toPortal}/>
        break;
    default:
      displayPage = <p>An error has occurred</p>;
      break;

  }

  return (
      <RouteProvider>
          {displayPage}
      </RouteProvider>
  );

}

export default App;
