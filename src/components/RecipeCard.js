import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RecipeCard = (props, key) => {
	const openRecipe = () => window.open(`${props.url}`, "_blank");

	const str = props.name.split(" ");
	const name = `${str[0]} ${str[1]} ${str[2]}...`;

	return (
		<div
			key={key}
			onClick={openRecipe}
			className={`bg-[url('${props.img}')] h-60 w-52 cursor-pointer   rounded-2xl shadow-xl flex flex-col justify-end bg-center hover:shadow-slate-300`}
		>
			<div className="rounded-b-2xl bg-black  w-52 h-16 opacity-80 hover:opacity-100  text-white  text-center font-thin tracking-tight  flex justify-center items-center ">
				<h5 className="">{name}</h5>
			</div>
		</div>
	);
};

export default RecipeCard;
