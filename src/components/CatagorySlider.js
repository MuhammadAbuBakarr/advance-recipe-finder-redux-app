import React from "react";
import Catagories from "./Catagories";
import CategoryJSON from "./CategoryJSON";
import uuid from "react-uuid";

const CatagorySlider = () => {
	return (
		<>
			<div className="text-5xl p-5 font-thin ">Catagories</div>
			<div className="flex space-x-8">
				{CategoryJSON.map((n) => {
					return <Catagories key={uuid()} img={n.src} name={n.name} />;
				})}
			</div>
		</>
	);
};

export default CatagorySlider;
