import React, {useState} from "react";
import {useEffect} from "react";


function EditRoutes( {backToPortal, routes} ) {

    console.log(routes[0].shipping_id);

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


            <div className="title"><b>Edit Routes</b></div>

            <div className="columns">
                <div className="current-routes">
                    <p>Edit Current Routes</p>
                    {addRoutes()}
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
