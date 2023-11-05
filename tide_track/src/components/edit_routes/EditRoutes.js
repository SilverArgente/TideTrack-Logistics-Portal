import React, { useState, useEffect } from "react";
import '../../css/EditRoutes.css';
import { useRouteContext } from "../../context/RouteContext.js";

function EditRoutes({ backToPortal, changeToCreateRoutes }) {

    const { routes, fetchRoutes, deleteRoute, addRoute } = useRouteContext();

    useEffect(() => {
      fetchRoutes();
    }, [fetchRoutes]);

    function addRoutes() {
        let modules = [];
        for (let i in routes) {
            modules.push(
                <div key={i} className="route-bar">
                    <div className="value">{routes[i].shipping_id}</div>
                    <div className="value">{routes[i].start_date}</div>
                    <div className="value">{routes[i].arrival_date}</div>
                    <div className="value">{routes[i].source}</div>
                    <div className="value">{routes[i].destination}</div>
                    <div className="value">{routes[i].shipping_weight}</div>
                    <div className="value">{routes[i].cost}</div>
                    <button className="delete-button" onClick={() =>
                                handleDeleteColumn(routes[i].shipping_id)}>X</button>
                </div>
            );
        }
        return modules;
    }

    function handleDeleteColumn(id) {
      deleteRoute(id);
    }

    return (
        <div className="main-container">
            <div className="title"><b>Edit Routes</b></div>
            <div className="columns">
                <div className="current-routes">
                    <p>Edit Current Routes</p>
                    <div className="route-bar">
                        <div className="value-description">Shipping ID</div>
                        <div className="value-description">Start Date</div>
                        <div className="value-description">Arrival Date</div>
                        <div className="value-description">Source</div>
                        <div className="value-description">Destination</div>
                        <div className="value-description">Shipping Weight</div>
                        <div className="value-description">Cost</div>
                        <div className="value-description">Delete</div>
                    </div>
                    <div>{addRoutes()}</div>
                </div>
            </div>
            <div className="footer">
                <button type="button" onClick={changeToCreateRoutes}>Create Route</button>
                <button type="button" onClick={backToPortal}>Back to Portal</button>
            </div>
        </div>
    );
}

export default EditRoutes;
