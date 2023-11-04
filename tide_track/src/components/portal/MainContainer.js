import React from "react";
import "../../css/MainContainer.css";

function MainContainer() {
    return (
        <div class="main-container">
            <div class="title"><b>TideTrack Logistics Portal</b></div>

            <div className="columns">
                <div className="current-routes">
                    <p>Current Routes</p>
                    <div>No current routes to display</div>
                </div>

                <div className="route-history">
                    <p>Route History</p>
                    <div>No previous routes to display</div>
                </div>
            </div>

            <div class="footer">
                <button type="button">View Company Information</button>
                <button type="button">Shipping History</button>
            </div>

        </div>
    );
}

export default MainContainer;