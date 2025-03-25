import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ItemDetails = () => {

    const { actions, store } = useContext(Context)
    console.log("ACA!!!!!!!!", store.currentItemDetails);


    return (
        <div className="Container mt-4">
            {store.isLoading ? (
                <div className="d-flex justify-content-center">
                    <img src="https://e7.pngegg.com/pngimages/602/548/png-clipart-light-laser-sword-lightsaber-arms.png" alt="Loading" />
                </div>
            ) : (
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <h1 className="card-title text-start ms-3">{store.currentItemDetails.name}</h1>
                        <div className="card shadow-sm d-flex flex-row bg-dark">
                            <img className="img-fluid"
                                alt={store.currentItemDetails.name}
                                onError={(e) => { e.target.src = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/big-placeholder.jpg"; }}
                                src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${store.activePage === 'people' ? 'characters' : store.activePage}/${store.currentItemDetails.uid}.jpg`}
                                style={{ width: "40%", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <ul className="list-group">
                                    {Object.entries(store.currentItemDetails).map(([key, value]) => (
                                        key !== 'created' && key !== 'edited' && key !== 'name' && key !== 'url' && key !== 'uid' ? (
                                            <li className="list-group-item bg-dark text-white" key={key}>
                                                <strong className="me-2">{key}: </strong> {value}
                                            </li>
                                        ) : null
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>)
}
