import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { trendingRecipes, nameState } from "../redux/actions";
import axios from "axios";

const Catagories = (props, key) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.trending);
	const stateName = props.name;

	const fetchCatData = async () => {
		const res = await axios
			.get(
				`https://api.edamam.com/api/recipes/v2?type=public&q=${props.name}&app_id=af25001a&app_key=a6586b2c4d585c0bf179487856c0f73f`
			)
			.catch((err) => console.log(err));
		console.log(state);
		dispatch(nameState(stateName));

		dispatch(trendingRecipes(res.data.hits));
	};

	return (
		<>
			<div
				key={key}
				onClick={fetchCatData}
				className="mt-6 cursor-pointer hover:opacity-80"
			>
				<div className="bg-emerald-600 flex items-center justify-center text-center w-20 h-20 rounded-full">
					<div className="w-14 opacity-90 h-14">
						<img src={props.img} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Catagories;
