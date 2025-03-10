import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const PlanetDetails = () => {

    const { actions, store } = useContext(Context)

    return( 
        <div>
            <ul>
            {store.currentItemDetails.name} 
                <li>
                   <p>Height: {store.currentItemDetails.height} </p> 
                    
                </li>
                <li>
                    {store.currentItemDetails.mass} 

                </li>
                <li>
                    {store.currentItemDetails.hair_color}
                </li>
                <li>
                    {store.currentItemDetails.skin_color} 
                </li>
                <li>
                    {store.currentItemDetails.eye_color} 
                </li>
                <li>
                    {store.currentItemDetails.birth_year} 
                </li>
                <li>
                    {store.currentItemDetails.gender}
                </li>
            </ul>
        </div> )
}