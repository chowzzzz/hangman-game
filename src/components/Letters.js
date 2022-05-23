import React, { useEffect, useState } from "react";

const Letters = () => {
	let alphabetArray = [];
	const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	alphabetArray = alphabets.split("");

	// TODO: REPLACE THIS WITH RANDOM WORD
	const [answer, setAnswer] = useState("hello");
	const [guessed, setGuessed] = useState([]);
	const [mistakes, setMistakes] = useState(0);
	const [newLetter, setNewLetter] = useState("");

	const handleClickLetter = (e) => {
		const letter = e.target.value;
		setNewLetter(letter);
		guessed.push(letter);
		const newGuessed = guessed.slice();
		console.log(newGuessed);
		setGuessed(guessed.slice());
	};

	const resetGame = () => {
		// TODO: REPLACE THIS WITH RANDOM WORD
		setGuessed([]);
		setNewLetter("");
		setMistakes(0);
		setAnswer("cat");
	};

	return (
		<div className="text-center">
			<h1 className="mb-5">
				{answer.split("").map((letter, i) =>
					guessed.includes(letter.toUpperCase()) ? (
						<span className="letter" key={i}>
							&nbsp;{letter.toUpperCase()}&nbsp;
							{newLetter ? (
								<span id="pencil">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										fill="#0d6efd"
										className="bi bi-pencil-fill"
										viewBox="0 0 16 16"
									>
										<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
									</svg>
								</span>
							) : (
								""
							)}
						</span>
					) : (
						" __ "
					)
				)}
			</h1>
			<div>
				{alphabetArray.map((a) => (
					<button
						type="button"
						className="btn btn-primary m-2"
						key={a}
						value={a}
						onClick={handleClickLetter}
						disabled={guessed.includes(a)}
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
