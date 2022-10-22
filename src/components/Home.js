import React from "react";
import SearchBar from "./SearchBar";
import CatagorySlider from "./CatagorySlider";
import RecipesPage from "./RecipesPage";

const Home = () => {
	return (
		<>
			<div className="flex bg-cyan-50  border-2 flex-col p-7  items-center justify-center">
				<div className="text-5xl p-5 font-thin ">Recipe Finder App</div>
				<SearchBar />
				<CatagorySlider />
				<RecipesPage />
			</div>
		</>
	);
};

export default Home;
