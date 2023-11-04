import './css/App.css';
import {useState} from "react";
import MainContainer from "./components/portal/MainContainer";
import EditRoutes from "./components/edit_routes/EditRoutes";

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

  switch (portalState) {

    case "portal":
      displayPage = <MainContainer changeToShippingHistory={toShippingHistory} changeToEditRoutes={toEditRoutes} />;
      break;
    case "edit routes":
      displayPage = <EditRoutes backToPortal={toPortal} />
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
