import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { trendingRecipes, nameState } from "../redux/actions";

const SearchBar = () => {
	const [search, setSearch] = useState();
	const dispatch = useDispatch();

	const enterPress = (e) => {
		if (e.key === "Enter") {
			fetchSearchData();
		}
	};

	const fetchSearchData = async () => {
		if (search) {
			const res = await axios
				.get(
					`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=af25001a&app_key=a6586b2c4d585c0bf179487856c0f73f`
				)
				.catch((err) => console.log(err));
			dispatch(nameState(search.toLocaleUpperCase()));
			dispatch(trendingRecipes(res.data.hits));
			setSearch("");
		}
	};

	return (
		<>
			<div className="w-6/12 mt-3">
				<label
					htmlFor="default-search"
					className="mb-2 text-sm font-medium text-gray-900 sr-only "
				>
					Search
				</label>
				<div className="relative">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-gray-500 dark:text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							></path>
						</svg>
					</div>
					<input
						onChange={(e) => setSearch(e.target.value)}
						onKeyDown={enterPress}
						value={search}
						type="search"
						id="default-search"
						className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-600 focus:border-2 focus:border-opacity-60 "
						placeholder="Search Your Favorite Recpies"
					/>
					<button
						onClick={fetchSearchData}
						className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-4 py-2 focus:outline-none focus:bg-blue-300"
					>
						Search
					</button>
				</div>
			</div>
		</>
	);
};

export default SearchBar;
