import "./App.css";
import { useState } from 'react'
import Hangman from "./components/Hangman";
import Letters from "./components/Letters";
import Fail from "./components/Fail";
import Win from "./components/Win";

function App() {
	const [showSuccess, setShowSuccess] = useState(false);
	const [showFail, setShowFail] = useState(true);
	const [mistakes, setMistakes] = useState(0);
	const [word, setWord] = useState("");
	return (
		<div className="App my-5">
			<h1 className="text-center">Hangman</h1>
			{!showFail && !showSuccess &&
				<Hangman mistakes={mistakes} />
			}
			{showFail && <Fail word={word} />}
			{showSuccess && <Win />}
			<div className="letters">
				<Letters setWord={setWord} setShowFail={setShowFail} setShowSuccess={setShowSuccess} setMistakes={setMistakes} />
			</div>
		</div>
	);
}

export default App;
