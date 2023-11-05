import { createContext, useState, useContext } from 'react';

const RouteContext = createContext();

export const useRouteContext = () => useContext(RouteContext);

export const RouteProvider = ({ children }) => {
  const [routes, setRoutes] = useState([]);

  const fetchRoutes = async () => {
    const response = await fetch('http://159.89.252.189:3000/routes');
    const data = await response.json();

    setRoutes(data); // array of route objects
  };

  const deleteRoute = async (shipping_id) => {
    await fetch(`http://159.89.252.189:3000/routes/${shipping_id}`, {
      method: 'DELETE',
    });

    fetchRoutes();
  };

  const addRoute = async (data) => {
        const dataToSend = {
            shipping_id: data.shippingID,
            start_date: data.startDate,
            arrival_date: data.arrivalDate,
            source: data.source,
            destination: data.destination,
            shipping_weight: data.shippingWeight,
            cost: data.cost,
            completed: false
        };
      console.log(dataToSend);

        await fetch("http://159.89.252.189:3000/routes", {
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

      fetchRoutes();
  };

  return (
    <RouteContext.Provider value={{ routes, fetchRoutes, deleteRoute, addRoute }}>
      {children}
    </RouteContext.Provider>
  );
};
