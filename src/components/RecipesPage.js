import React, { useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import { defaultRecipes } from "../redux/actions";
import uuid from "react-uuid";

const RecipesPage = () => {
	// API Calling
	const dispatch = useDispatch();
	// const fetchTrendingRecipes = async () => {
	// 	const res = await axios
	// 		.get(
	// 			"https://api.edamam.com/api/recipes/v2?type=public&q=pakistani&app_id=af25001a&app_key=a6586b2c4d585c0bf179487856c0f73f"
	// 		)
	// 		.catch((err) => console.log(err));
	// 	if (res.status !== "200") {
	// 		dispatch(trendingRecipes(res.data.hits));
	// 	}
	// };

	useEffect(() => {
		dispatch(defaultRecipes());
	}, []);

	const statetrendingRecipes = useSelector((state) => state.trending.recipes);
	const currentName = useSelector((state) => state.names);

	return (
		<>
			<div className="my-10  font-thin text-4xl">{currentName}</div>
			<div className=" justify-center gap-10  flex-wrap w-11/12 flex ">
				{statetrendingRecipes.map((rec) => {
					const recipeUrl = rec.recipe.url;

					return (
						<RecipeCard
							key={uuid()}
							url={recipeUrl}
							name={rec.recipe.label}
							img={rec.recipe.image}
						/>
					);
				})}
			</div>
		</>
	);
};

export default RecipesPage;
