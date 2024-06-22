import React, { useState } from "react";
import askai from "../assets/askai.png";
import notebite from "../assets/notebite.png";

function Projects() {
	const [hoveredProject, setHoveredProject] = useState(null);

	const projects = [
		{
			id: 1,
			name: "AskAI By Gemini",
			image: askai,
			description: `A custom-built Gemini AI. Developed using a combination of HTML, CSS, JavaScript, and React.js, and styled with Tailwind CSS, AskAI is a testament to modern web development techniques. This user-friendly application leverages the powerful Gemini API to provide a seamless and intuitive AI experience.`,
			link: "https://askiaigemini.netlify.app/",
		},
		{
			id: 2,
			name: "NoteBite with AI assistant",
			image: notebite,
			description: `NoteBite is a note-storing application integrated with an AI assistant (Google Gemini) to enhance your productivity. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and styled with Tailwind CSS, it offers a seamless user experience.(Website Hosting is on Progress) `,
			link: "https://github.com/sachinawas490/notebite_backend",
		},
	];

	return (
		<section className="bg-white dark:bg-gray-900  border-2 border-slate-800 h-auto  py-8 mt-10 mx-4 md:mx-20 px-[10%] shadow-md shadow-slate-600 ">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
					Our Project's
				</h1>

				<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
					{projects.map((project) => (
						<div
							key={project.id}
							className="relative flex items-end overflow-hidden bg-cover rounded-lg h-96"
							style={{ backgroundImage: `url(${project.image})` }}
							onMouseEnter={() => setHoveredProject(project.id)}
							onMouseLeave={() => setHoveredProject(null)}
						>
							<div
								className={`absolute inset-0 w-full h-full px-8 py-4 backdrop-blur-sm transition-opacity duration-300 ${
									hoveredProject === project.id
										? "bg-white/90 dark:bg-gray-800/90 opacity-100"
										: "opacity-0"
								}`}
							>
								<h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
									{project.name}
								</h2>
								<p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
									{project.description}
								</p>
							</div>
							<div className="absolute bottom-0 w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
								<h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
									{project.name}
								</h2>

								<p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
									{" "}
									<a
										href={project.link}
										className="inline-block mt-4 text-blue-500 hover:underline"
									>
										Live Demo
									</a>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
