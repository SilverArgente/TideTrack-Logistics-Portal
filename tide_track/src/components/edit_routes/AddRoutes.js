import React, { useState, useEffect } from "react";
import "../../css/AddRoutes.css";
import { useRouteContext } from "../../context/RouteContext.js";

export default function AddRoutes({ backToPortal }) {
    const { routes, fetchRoutes, deleteRoute, addRoute } = useRouteContext();

    const [submitted, setSubmitted] = useState(false);
    const [effectTriggered, setEffectTriggered] = useState(false);


    const [formData, setFormData] = useState({
        shippingID: "",
        startDate: "",
        arrivalDate: "",
        source: "",
        destination: "",
        shippingWeight: "",
        cost: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmitted = () => {
      setSubmitted(true);
    };

    useEffect(() => {
      if (submitted && !effectTriggered) {
        console.log('useEffect triggered');
        setEffectTriggered(true); // Mark the effect as triggered
        addRoute(formData);
        backToPortal();
      }
    }, [submitted, effectTriggered]);

    return (
        <div className="main-container">
            <div className="title">
                <b>Create New Route</b>
            </div>
            <div className="columns">
                <div className="current-routes">
                    <form>
                        <div className="form-group">
                            <label htmlFor="shippingID">Shipping ID:</label>
                            <input
                                type="text"
                                id="shippingID"
                                name="shippingID"
                                value={formData.shippingID}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="startDate">Start Date:</label>
                            <input
                                type="date"
                                id="startDate"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="arrivalDate">Arrival Date:</label>
                            <input
                                type="date"
                                id="arrivalDate"
                                name="arrivalDate"
                                value={formData.arrivalDate}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="source">Source:</label>
                            <input
                                type="text"
                                id="source"
                                name="source"
                                value={formData.source}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="destination">Destination:</label>
                            <input
                                type="text"
                                id="destination"
                                name="destination"
                                value={formData.destination}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="shippingWeight">Shipping Weight:</label>
                            <input
                                type="text"
                                id="shippingWeight"
                                name="shippingWeight"
                                value={formData.shippingWeight}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="cost">Cost:</label>
                            <input
                                type="text"
                                id="cost"
                                name="cost"
                                value={formData.cost}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer">
                <button type="button" onClick={backToPortal}>
                    Back to Portal
                </button>
                <button type="button" onClick={handleSubmitted}>
                    Submit
                </button>
            </div>
        </div>
    );
}
