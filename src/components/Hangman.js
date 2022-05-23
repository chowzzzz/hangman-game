import React from "react";

const Hangman = () => {
	return (
		<div className="text-center">
			<svg
				width="300"
				height="400"
				viewBox="0 0 300 400"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="hangman">
					<line
						id="longRod"
						x1="113.5"
						y1="91"
						x2="113.5"
						y2="315"
						stroke="black"
						stroke-width="5"
					/>
					<line
						id="bottomRod"
						x1="77"
						y1="312.5"
						x2="153"
						y2="312.5"
						stroke="black"
						stroke-width="5"
					/>
					<line
						id="topRod"
						x1="111"
						y1="88.5"
						x2="195"
						y2="88.5"
						stroke="black"
						stroke-width="5"
					/>
					<line
						id="string"
						x1="195.5"
						y1="86"
						x2="195.5"
						y2="120"
						stroke="black"
						stroke-width="5"
					/>
					<circle
						id="head"
						cx="195"
						cy="141"
						r="18.5"
						stroke="black"
						stroke-width="5"
					/>
					<line
						id="body"
						x1="195.5"
						y1="162"
						x2="195.5"
						y2="228"
						stroke="black"
						stroke-width="5"
					/>
					<line
						id="leftLeg"
						x1="194.768"
						y1="226.768"
						x2="169.768"
						y2="251.768"
						stroke="black"
						stroke-width="5"
					/>
					<line
						id="rightLeg"
						y1="-2.5"
						x2="35.3553"
						y2="-2.5"
						transform="matrix(0.707107 0.707107 0.707107 -0.707107 198 225)"
						stroke="black"
						stroke-width="5"
					/>
					<line
						id="leftArm"
						x1="196.232"
						y1="185.768"
						x2="175.232"
						y2="164.768"
						stroke="black"
						stroke-width="5"
					/>
					<line
						id="rightArm"
						y1="-2.5"
						x2="29.6985"
						y2="-2.5"
						transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 193 184)"
						stroke="black"
						stroke-width="5"
					/>
				</g>
			</svg>
		</div>
	);
};

export default Hangman;
