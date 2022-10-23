import React from "react";
import SearchBar from "./SearchBar";
import CatagorySlider from "./CatagorySlider";
import RecipesPage from "./RecipesPage";

const Home = () => {
	return (
		<>
			<div className="flex  flex-col p-3   items-center justify-center">
				<div className="text-5xl p-3  font-thin ">Recipe Finder App</div>
				<p></p>
				<SearchBar />
				<CatagorySlider />
				<RecipesPage />
			</div>
		</>
	);
};

export default Home;
