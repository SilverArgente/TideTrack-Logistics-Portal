import React, {useEffect, useState} from "react";
import "../../css/MainContainer.css";

function MainContainer( { changeToEditRoutes, routes} ) {

    function addRoutes() {
        let modules = [];
        for (let i in routes) {
            modules.push(
                <div>{routes[i].shipping_id} | {routes[i].start_date}
                    { } | {routes[i].arrival_date} | {routes[i].source}
                    { } | {routes[i].destination} | {routes[i].shipping_weight}
                    { } | {routes[i].cost} </div>
            );
        }
        return modules;
    }

    return (
        <div className="main-container">

            <div className="title"><b>TideTrack Logistics Portal</b></div>

            <div className="columns">
                <div className="current-routes">
                    <p>Current Routes</p>
                    <div>{addRoutes()}</div>
                </div>
            </div>

            <div className="footer">
                <button type="button" onClick={changeToEditRoutes}>Edit Routes</button>
            </div>

        </div>
    );
}

export default MainContainer;