import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { singleRecipe, emptyState } from "../redux/actions";
import { Link } from "react-router-dom";

const SIngleRecipe = () => {
	const { recipeID } = useParams();
	const dispatch = useDispatch();
	const recipe = useSelector((state) => state.singleRecipe);

	const fetchSingleRecipe = async () => {
		const res = await axios
			.get(
				`https://api.edamam.com/api/recipes/v2/${recipeID}?type=public&app_id=af25001a&app_key=a6586b2c4d585c0bf179487856c0f73f`
			)
			.catch((err) => console.log(err));
		console.log(res);

		dispatch(singleRecipe(res.data.recipe));
	};

	useEffect(() => {
		if (recipeID && recipeID !== "") fetchSingleRecipe();
		dispatch(emptyState());
	}, []);

	return (
		<div>
			<Link to={"/"}>
				<div className="inline-flex cursor-pointer items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
					Home
				</div>
			</Link>
			<div>
				<img src={recipe.image} alt="" />
			</div>
		</div>
	);
};

export default SIngleRecipe;
