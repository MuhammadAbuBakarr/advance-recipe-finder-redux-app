import {
	fetchData,
	textValue,
	singleRecipeID,
	removeLoadedRecipe,
} from "./actionType";

const initialState = {
	recipes: [],
};

export const trendingRecipeReducer = (
	state = initialState,
	{ type, payload }
) => {
	switch (type) {
		case fetchData:
			return { ...state, recipes: payload };

		default:
			return state;
	}
};

export const nameReducer = (state = "Trending Recipes", { type, payload }) => {
	switch (type) {
		case textValue:
			return (state = `${payload} Recipes`);

		default:
			return state;
	}
};

export const selectedRecipeReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case singleRecipeID:
			return { ...state, ...payload };
		case removeLoadedRecipe:
			return {};
		default:
			return state;
	}
};
