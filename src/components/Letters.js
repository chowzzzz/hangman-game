import React, { useEffect, useState } from "react";
import { getRandomWord } from "../Words";
// var randomWords = require("random-words");

const Letters = ({ setShowFail, setShowSuccess, setMistakes, mistakes, setWord }) => {
	let maxWrongs = 6;
	let alphabetArray = [];
	const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	alphabetArray = alphabets.split("");

	const [answer, setAnswer] = useState("");
	const [guessed, setGuessed] = useState(new Set([]));
	const [newLetter, setNewLetter] = useState("");
	const [isWinner, setIsWinner] = useState(false);
	const [gameOver, setGameOver] = useState(false);

	useEffect(() => {
		setShowFail(gameOver);
	}, [gameOver, setShowFail]);

	useEffect(() => {
		setShowSuccess(isWinner);
	}, [isWinner, setShowSuccess]);

	useEffect(() => {
		setAnswer(getRandomWord);
		// setAnswer(randomWords());
	}, []);

	useEffect(() => {

		setWord(answer)

	}, [answer]);

	useEffect(() => {
		if (guessed.size > 0) {
			let guessCorrect = [];

			guessCorrect = answer.split("").map((letter) => {
				if (guessed.has(letter.toUpperCase())) {
					return letter;
				} else {
					return "";
				}
			});
			const isCorrect = guessCorrect.join("") === answer;
			setIsWinner(isCorrect);
		}
	}, [guessed, answer]);

	useEffect(() => {
		setGameOver(mistakes >= maxWrongs);
	}, [mistakes, maxWrongs]);

	const handleClickLetter = (e) => {
		const letter = e.target.value;
		setNewLetter(letter);
		guessed.add(letter);
		setGuessed(new Set(guessed));
		// check if answer contains letter
		if (!answer.toUpperCase().includes(letter.toUpperCase())) {
			setMistakes(mistakes + 1);
		}
	};

	const resetGame = () => {
		setGuessed(new Set([]));
		setNewLetter("");
		setMistakes(0);
		setAnswer(getRandomWord);
		// setAnswer(randomWords());
		setShowSuccess(false);
		setShowFail(false);
		setIsWinner(false);
		setGameOver(false);
	};

	return (
		<div className="text-center">
			<h4 className="mb-3">Hint: TikTok Youth Camp 2022</h4>
			<h6>
				Wrong Guesses: {mistakes} / {maxWrongs}
			</h6>
			<h1 className="mb-5">
				{answer.split("").map((letter, i) =>
					guessed.has(letter.toUpperCase()) ? (
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
						disabled={guessed.has(a) || gameOver || isWinner}
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
