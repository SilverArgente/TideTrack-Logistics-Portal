import React, {useEffect} from "react";
import "../../css/MainContainer.css";

function MainContainer( { changeToEditRoutes, routes} ) {

    // console.log(routes[0]);

    return (
        <div className="main-container">

            <div className="title"><b>TideTrack Logistics Portal</b></div>

            <div className="columns">
                <div className="current-routes">
                    <p>Current Routes</p>
                    <div>No current routes to display</div>
                </div>
            </div>

            <div className="footer">
                <button type="button" onClick={changeToEditRoutes}>Edit Routes</button>
            </div>

        </div>
    );
}

export default MainContainer;