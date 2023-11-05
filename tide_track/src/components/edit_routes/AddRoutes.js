import React from "react";
import "../../css/AddRoutes.css";

export default function AddRoutes( {backToPortal} ) {
    return (
        <div className="main-container">
            <div className="title"><b>Create New Route</b></div>
            <div className="columns">
                <div className="current-routes">
                    <form>
                        <div className="form-group">
                            <label htmlFor="shippingID">Shipping ID:</label>
                            <input type="text" id="shippingID" name="shippingID"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="startDate">Start Date:</label>
                            <input type="date" id="startDate" name="startDate"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="arrivalDate">Arrival Date:</label>
                            <input type="date" id="arrivalDate" name="arrivalDate"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="source">Source:</label>
                            <input type="text" id="source" name="source"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="destination">Destination:</label>
                            <input type="text" id="destination" name="destination"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="shippingWeight">Shipping Weight:</label>
                            <input type="text" id="shippingWeight" name="shippingWeight"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="cost">Cost:</label>
                            <input type="text" id="cost" name="cost"/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer">
                <button type="button" onClick={backToPortal}>Back to Portal</button>
                <button type="button" onClick={backToPortal}>Submit</button>
            </div>
        </div>
    );
}