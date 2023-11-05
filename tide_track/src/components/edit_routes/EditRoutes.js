import React, {useState} from "react";
import {useEffect} from "react";
import '../../css/EditRoutes.css';

function EditRoutes( {backToPortal, routes} ) {

    console.log(routes[0].shipping_id);

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
                    <button className="delete-button" onClick={() => handleDeleteColumn(routes[i].shipping_id)}>X</button>
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
                // Add any other headers you may need (e.g., authentication headers)
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Column deleted successfully', data);
                // If needed, update the state or perform any other actions after successful deletion
            })
            .catch(error => {
                console.error('Error deleting column:', error);
                // Handle errors (e.g., show an error message to the user)
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
                <button type="button">Create Route</button>
                <button type="button" onClick={backToPortal}>Back to Portal</button>
            </div>

        </div>
    );

}

export default EditRoutes;
