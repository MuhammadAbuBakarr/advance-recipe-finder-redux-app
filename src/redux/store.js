import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {
	trendingRecipeReducer,
	nameReducer,
	selectedRecipeReducer,
} from "./reducers";
import thunk from "redux-thunk";

const allReducers = combineReducers({
	trending: trendingRecipeReducer,
	names: nameReducer,
	singleRecipe: selectedRecipeReducer,
});

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
