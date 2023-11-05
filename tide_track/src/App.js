import './css/App.css';
import {useEffect, useState} from "react";
import MainContainer from "./components/portal/MainContainer";
import EditRoutes from "./components/edit_routes/EditRoutes";

function App() {

  const [portalState, setPortalState] = useState("portal");
  const [routes, setRoutes] = useState();
  const [rerender, setRerender] = useState();

  let displayPage;

  useEffect(() => {
    fetch('http://159.89.252.189:3000/routes')
        .then((res) => res.json())
        .then((data) => {
          setRoutes(data);
          setRerender("rerender");
        })
        .catch((err) => {
          console.log(err.message);
        });
  }, [rerender]);

  console.log(routes);

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
      displayPage = <MainContainer
          changeToShippingHistory={toShippingHistory}
          changeToEditRoutes={toEditRoutes}
          routes={routes}
        />;
      break;
    case "edit routes":
      displayPage = <EditRoutes backToPortal={toPortal} routes={routes} />
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
