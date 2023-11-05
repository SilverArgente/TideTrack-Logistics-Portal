import React, { useState } from "react";
import "../../css/AddRoutes.css";

export default function AddRoutes({ backToPortal }) {
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

    const handleSubmit = () => {
        // Construct the data to send to the API
        const dataToSend = {
            shipping_id: formData.shippingID,
            start_date: formData.startDate,
            arrival_date: formData.arrivalDate,
            source: formData.source,
            destination: formData.destination,
            shipping_weight: formData.shippingWeight,
            cost: formData.cost,
            completed: true
        };

        // Make the API call using fetch
        fetch("http://159.89.252.189:3000/routes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Data sent successfully:", data);
                // Optionally, you can perform actions after a successful submission.
            })
            .catch((error) => {
                console.error("Error sending data:", error);
                // Handle errors, e.g., show an error message to the user.
            });
    };

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
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
}
