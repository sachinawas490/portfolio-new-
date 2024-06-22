import React from "react";
import sachin from "../assets/sachin.jpg";

function Home() {
	return (
		<section className="flex flex-col items-center justify-center pt-[110px] px-4 py-10 bg-gray-100 dark:bg-gray-900 md:flex-row md:justify-around px-[10%]">
			<div className="flex justify-center mb-6 md:mb-0">
				<div className="avatar">
					<div className="w-40  h-40 rounded-full shadow-lg   lg:h-[300px] lg:w-[300px]">
						<img src={sachin} alt="Sachin Awasthi" className="rounded-full" />
					</div>
				</div>
			</div>
			<div className="text-center md:text-left pl-[7%]">
				<h1 className="text-3xl font-semibold text-gray-800 dark:text-white md:text-4xl lg:text-5xl ">
					Welcome to My Portfolio!
				</h1>
				<p className="mt-4 text-lg text-gray-600 dark:text-gray-300 md:text-xl lg:text-2xl">
					I'm Sachin Awasthi, a Full Stack Developer specializing in the MERN
					stack, passionate about crafting scalable and efficient web
					applications.
				</p>
			</div>
		</section>
	);
}

export default Home;
