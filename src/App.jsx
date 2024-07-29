import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
	const [count, setCount] = useState(0);

	return (
		<main>
			<nav>
				<Navbar className="" />
			</nav>
			<section>
				<Home />
			</section>

			<div className=" p-5">
				<button
					onClick={() => setCount((count) => count + 1)}
					className=" bg-black rounded-md  p-3 text-white  justify-center text-center "
				>
					count is {count}
				</button>
			</div>
		</main>
	);
}

export default App;
