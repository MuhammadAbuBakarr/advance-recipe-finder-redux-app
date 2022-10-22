import {
	fetchData,
	textValue,
	singleRecipeID,
	removeLoadedRecipe,
} from "./actionType";
import axios from "axios";

export const trendingRecipes = (recipies) => {
	return {
		type: fetchData,
		payload: recipies,
	};
};

export const defaultRecipes = () => async (dispatch) => {
	const res = await axios.get(
		"https://api.edamam.com/api/recipes/v2?type=public&q=pakistani&app_id=af25001a&app_key=a6586b2c4d585c0bf179487856c0f73f"
	);
	dispatch({ type: fetchData, payload: res.data.hits });
};

export const nameState = (name) => {
	return {
		type: textValue,
		payload: name,
	};
};

export const singleRecipe = (recipe) => {
	return {
		type: singleRecipeID,
		payload: recipe,
	};
};

export const emptyState = () => {
	return {
		type: removeLoadedRecipe,
	};
};
