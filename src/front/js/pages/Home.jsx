import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center my-5 bg-dark">
			<img width={"100%"} src="https://starwars.chocobar.net/star-wars-back0.jpg"/>
		</div>
	);
};
