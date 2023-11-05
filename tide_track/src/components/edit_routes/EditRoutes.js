import React, {useState} from "react";
import {useEffect} from "react";

function EditRoutes( {backToPortal, routes} ) {

    console.log(routes[0].shipping_id);

    return (
        <div className="main-container">


            <div className="title"><b>Edit Routes</b></div>

            <div className="columns">
                <div className="current-routes">
                    <p>Edit Current Routes</p>
                    <div>No current routes to display</div>
                </div>

                <div className="route-history">
                    <p>Edit Route History</p>
                    <div>No previous routes to display</div>
                </div>
            </div>

            <div className="footer">
                <button type="button">Create Route</button>
                <button type="button" onClick={backToPortal}>Back to Portal</button>
            </div>

        </div>

    );
}

export default EditRoutes;