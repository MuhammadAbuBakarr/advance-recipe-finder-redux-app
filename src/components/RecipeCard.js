import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RecipeCard = (props, key) => {
	const openRecipe = () => window.open(`${props.url}`, "_blank");

	return (
		<div
			key={key}
			onClick={openRecipe}
			className="w-[360px] cursor-pointer h-[470px] bg-white rounded-2xl shadow-xl hover:shadow-teal-100"
		>
			<div>
				<span>
					<LazyLoadImage
						className=" rounded-t-2xl w-[360px] bg-center"
						loading=" lazy"
						src={props.img}
						alt="laksjsf"
					/>
				</span>

				<div className="p-5 flex flex-col items-center">
					<span>
						<h5 className="mb-2 text-2xl  text-center font-thin tracking-tight text-gray-700 ">
							{props.name}
						</h5>
					</span>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
