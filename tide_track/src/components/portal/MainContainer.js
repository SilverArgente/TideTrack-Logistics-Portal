import React, {useEffect} from "react";
import "../../css/MainContainer.css";

function MainContainer( { changeToShippingHistory, changeToEditRoutes } ) {

    useEffect(() => {
        fetch('http://159.89.252.189:3000/routes')
            .then((res) => res.json())
            .then((data) => {

                console.log(data);
                // setRouteInfo(data.map(current) => current.);

            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div class="main-container">

            <div class="title"><b>TideTrack Logistics Portal</b></div>

            <div className="columns">
                <div className="current-routes">
                    <p>Current Routes</p>
                    <div>No current routes to display</div>
                </div>
            </div>

            <div class="footer">
                <button type="button" onClick={changeToEditRoutes}>Edit Routes</button>
            </div>

        </div>
    );
}

export default MainContainer;