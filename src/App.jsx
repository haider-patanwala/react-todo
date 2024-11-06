import { useEffect, useState } from "react";
import "./App.css";

async function fetchTodo() {
	// API Documentation
	// https://dummyjson.com/docs/todos
	const data = await fetch("https://dummyjson.com/todos", {
		method: "GET",
	})
		.then((res) => res.json())
		.then((data) => data.todos);
	return data;
}

function App() {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		fetchTodo().then((data) => setTodos(data));
	}, []);

	useEffect(() => {
		console.log(todos);
	}, [todos]);

	return (
		<>
			<main className='flex relative flex-col justify-center gap-10 items-center text-center'>
				<h1 className='text-5xl text-green-800 font-bold'>
					Todo<span className='text-red-600 uppercase'>ist</span>
				</h1>
				<ul className='flex flex-col gap-10 relative w-[60rem]'>
					{todos.map((data, i) => (
						<li
							key={i}
							className='max-w-[100rem] w-full flex justify-between capitalize bg-gray-200 rounded-lg text-slate-950 font-medium px-5 py-3 text-3xl'>
							<div className='flex text-left flex-col gap-4 w-3/4'>
								<p className='text-lg '>id: {data.id}</p>
								<p className='text-xl'>Todo: {data.todo}</p>
							</div>
							<button
								className={
									data.completed
										? "text-base w-1/4 bg-green-600/50 text-green-600"
										: "bg-red-600/50 text-base w-1/4 text-red-600"
								}>
								{data.completed ? "Completed" : "Incomplete"}
							</button>
						</li>
					))}
				</ul>
			</main>
		</>
	);
}

export default App;
