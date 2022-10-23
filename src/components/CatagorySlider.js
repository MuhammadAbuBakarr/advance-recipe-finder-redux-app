import React from "react";
import Catagories from "./Catagories";
import CategoryJSON from "./CategoryJSON";
import uuid from "react-uuid";

const CatagorySlider = () => {
	return (
		<>
			<div className="text-3xl mt-6 font-thin ">Catagories</div>
			<div className="flex flex-wrap justify-center space-x-10">
				{CategoryJSON.map((n) => {
					return <Catagories key={uuid()} img={n.src} name={n.name} />;
				})}
			</div>
		</>
	);
};

export default CatagorySlider;
