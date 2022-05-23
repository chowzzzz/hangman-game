import React, { useState } from "react";

const Letters = () => {
	let alphabetArray = [];
	const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	alphabetArray = alphabets.split("");

	// TODO: REPLACE THIS WITH RANDOM WORD
	const [answer, setAnswer] = useState("hello");
	const [guessed, setGuessed] = useState(new Set([]));
	const [mistakes, setMistakes] = useState(0);

	const handleClickLetter = (e) => {
		const letter = e.target.value;
		const newGuessed = guessed.add(letter);
		setGuessed(new Set(newGuessed));
		console.log(guessed);
	};

	const resetGame = () => {
		// TODO: REPLACE THIS WITH RANDOM WORD
		setAnswer("cat");
		setGuessed(new Set([]));
		setMistakes(0);
	};

	return (
		<div className="text-center">
			<h2 className="mb-5">
				{answer
					.split("")
					.map((letter) =>
						guessed.has(letter.toUpperCase())
							? ` ${letter.toUpperCase()} `
							: " _ "
					)}
			</h2>
			<div>
				{alphabetArray.map((a) => (
					<button
						type="button"
						className="btn btn-primary m-2"
						key={a}
						value={a}
						onClick={handleClickLetter}
						disabled={guessed.has(a)}
					>
						{a}
					</button>
				))}
			</div>

			<div>
				<button className="btn btn-warning my-5" onClick={resetGame}>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Letters;
