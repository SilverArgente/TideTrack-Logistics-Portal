import React, { useState } from "react";
import '../../css/EditRoutes.css';

function EditRoutes({ backToPortal, routes, changeToCreateRoutes }) {
    const [rerender, setRerender] = useState(0); // Initialize with 0
    const [updatedRoutes, setUpdatedRoutes] = useState(routes); // Manage routes

    function addRoutes() {
        let modules = [];
        for (let i in updatedRoutes) {
            modules.push(
                <div key={i} className="route-bar">
                    <div className="value">{updatedRoutes[i].shipping_id}</div>
                    <div className="value">{updatedRoutes[i].start_date}</div>
                    <div className="value">{updatedRoutes[i].arrival_date}</div>
                    <div className="value">{updatedRoutes[i].source}</div>
                    <div className="value">{updatedRoutes[i].destination}</div>
                    <div className="value">{updatedRoutes[i].shipping_weight}</div>
                    <div className="value">{updatedRoutes[i].cost}</div>
                    <button className="delete-button" onClick={() => handleDeleteColumn(updatedRoutes[i].shipping_id)}>X</button>
                </div>
            );
        }
        return modules;
    }

    function handleDeleteColumn(id) {
        fetch(`http://159.89.252.189:3000/routes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Column deleted successfully', data);
                // Update the routes to exclude the deleted entry
                setUpdatedRoutes(updatedRoutes.filter(route => route.shipping_id !== id));
            })
            .catch(error => {
                console.error('Error deleting column:', error);
            });
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
