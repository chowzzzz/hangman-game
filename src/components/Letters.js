import React, { useState } from "react";

const Letters = () => {
	let alphabetArray = [];
	const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	alphabetArray = alphabets.split("");

	// REPLACE THIS WITH RANDOM WORD
	const [answer, setAnswer] = useState("hello");
	const [guessed, setGuessed] = useState(new Set([]));

	return (
		<div className="text-center">
			<div className="mb-4">
				{answer
					.split("")
					.map((letter) => (guessed.has(letter) ? letter : " _ "))}
			</div>
			<div>
				{alphabetArray.map((a) => (
					<button
						type="button"
						class="btn btn-primary m-2"
						key={a}
						value={a}
					>
						{a}
					</button>
				))}
			</div>
		</div>
	);
};

export default Letters;
