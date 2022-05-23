import "./App.css";
import Hangman from "./components/Hangman";
import Letters from "./components/Letters";

function App() {
	return (
		<div className="App container my-5">
			<h1 className="text-center">Hangman</h1>
			<Hangman />
			<Letters />
		</div>
	);
}

export default App;
