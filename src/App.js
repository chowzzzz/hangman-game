import "./App.css";
import { useState } from 'react'
import Hangman from "./components/Hangman";
import Letters from "./components/Letters";
import Fail from "./components/Fail";

function App() {
	const [showSuccess, setShowSuccess] = useState(false);
	const [showFail, setShowFail] = useState(true);
	return (
		<div className="App my-5">
			<h1 className="text-center">Hangman</h1>
			{!showFail && !showSuccess &&
				<Hangman />
			}
			{showFail && <Fail />}
			{/* {showSuccess && <Success />} */}
			<div className="letters">


				<Letters setShowFail={setShowFail} setShowSuccess={setShowSuccess} />
			</div>
		</div>
	);
}

export default App;
