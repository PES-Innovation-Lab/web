import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import projectsData from '../public/data/projects.json';
import Cards from '../components/Cards';
import LayoutAlt from '../components/LayoutAlt';

type projectsType = {
	year: string;
	title: string;
	short_description: string;
	long_description: string;
	keywords: string;
	mentors: string;
	interns: string;
	poster_url: string;
}[];

export default function NewProjects() {
	const cards = [1, 2, 3, 4, 5, 6, 7, 8];
	const [selectedId, setSelectedId] = useState(-1);
	const containerRefs = useRef(new Array());

	const [currentYear, setCurrentYear] = useState(2023);

	const years = [2023, 2022, 2020, 2019, 2018, 2017, 2016];

	const yearElements = years.map((year, ind) => {
		return (
			<button
				key={ind}
				onClick={() => setCurrentYear(year)}
				className={`lg:text-base text-sm ${
					year == currentYear ? 'text-lab-green font-bold' : ''
				}`}
			>
				{year}
			</button>
		);
	});

	const projects = projectsData;

	const currentProjects: projectsType =
		projects[currentYear.toString()]['projects'];

	// const AllProjects = Object.values(projectsData).map(
	// 	(item) => item.projects
	// );

	// const FlattenedAllProjects = AllProjects.flat(1);

	console.log('Selected ID IS', selectedId);

	const cardLayout = (
		<div className="flex flex-wrap gap-8 lg:justify-start justify-around">
			{currentProjects.map((card, i) => {
				return (
					<motion.div
						className={
							(card.year == currentYear.toString()
								? ''
								: 'hidden') +
							(selectedId === i
								? ' opened-card lg:h-[75%] lg:w-[80%] md:h-[75%] md:w-[95%] h-[75%] w-[95%]'
								: 'p-1 bg-gray-800 rounded-lg overflow-hidden w-fit inline-block phone:m-4')
						}
						onClick={() => {
							if (selectedId == -1) setSelectedId(i);
						}}
						key={i}
						layout
						ref={(el) => (containerRefs.current[i] = el)}
					>
						{selectedId === i ? (
							<div className="text-black gap-8 flex w-full h-full bg-black border-2 rounded-lg border-gray-700 overflow-hidden p-4 pr-0">
								<img
									className="h-full aspect-auto self-center rounded-md sm:block hidden"
									src={card.poster_url}
									alt={card.title}
								/>
								<div className="flex flex-col justify-between pr-4 overflow-auto gap-4">
									<div className="flex flex-col gap-4">
										<div className="flex flex-row items-center sm:flex-col-reverse md:flex-row justify-between text-white gap-2 md:gap-0">
											<div className=" font-bold font-martian-mono text-2xl xl:text-4xl lg:text-3xl">
												{card.title}
											</div>
											<div className="flex gap-4 items-center shrink-0 sm:self-end md:self-auto h-fit">
												{i != 0 && (
													<button
														className="relative w-6 h-6 lg:w-8 lg:h-8 shrink-0"
														onClick={(e) => {
															e.stopPropagation();
															setSelectedId(
																(prev) =>
																	prev - 1
															);
														}}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															strokeWidth={1.5}
															stroke="currentColor"
															className="text-white w-full h-full"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M15.75 19.5L8.25 12l7.5-7.5"
															/>
														</svg>
													</button>
												)}
												{i !=
													currentProjects.length -
														1 && (
													<button
														className="relative w-6 h-6 lg:w-8 lg:h-8 shrink-0"
														onClick={(e) => {
															e.stopPropagation();
															setSelectedId(
																(prev) =>
																	prev + 1
															);
														}}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															strokeWidth={1.5}
															stroke="currentColor"
															className="text-white w-full h-full"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M8.25 4.5l7.5 7.5-7.5 7.5"
															/>
														</svg>
													</button>
												)}
												<button
													className="relative w-6 h-6 lg:w-8 lg:h-8 shrink-0 text-white"
													onClick={(e) => {
														e.stopPropagation();
														setSelectedId(-1);
													}}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="currentColor"
														className="text-white w-full h-full"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M6 18L18 6M6 6l12 12"
														/>
													</svg>
												</button>
											</div>
										</div>
										<div className="text-gray-400 font-martian-mono xl:text-base text-sm">
											{card.long_description}
										</div>
									</div>
									<div className="text-white flex flex-col font-martian-mono self-end xl:text-lg w-fit">
										<div className="font-martian-mono">
											<span className="font-martian-mono text-lab-green">
												{card.interns.includes(',') ? (
													<>INTERNS</>
												) : (
													<>INTERN&nbsp;</>
												)}
											</span>{' '}
											: {card.interns}
										</div>
										<div className="font-martian-mono">
											<span className="font-martian-mono text-lab-green">
												{card.mentors.includes(',') ? (
													<>MENTORS</>
												) : (
													<>MENTOR&nbsp;</>
												)}
											</span>{' '}
											: {card.mentors}
										</div>
									</div>
								</div>
							</div>
						) : (
							<Cards name={card.title} pfp={card.poster_url} />
						)}
					</motion.div>
				);
			})}
			<motion.div
				className="dim-layer"
				animate={{ opacity: selectedId != -1 ? 0.8 : 0 }}
			/>
		</div>
	);

	return (
		<LayoutAlt title={'PIL | Projects'} active={'Projects'} search={false}>
			{/* <div className={`pb-20 pt-8 px-12 flex gap-10 flex-col ${selectedId != -1 ? "overflow-hidden h-screen" : ""}`}> */}
			<div className={`pb-20 pt-8 px-4 phone:px-6 sm:px-12 flex gap-10 flex-col`}>
				<div className="flex items-center justify-between sm:flex-row flex-col gap-4 sm:gap-0">
					<div className="font-martian-mono text-lab-green text-4xl lg:text-6xl">
						PROJECTS
					</div>
					<div className="text-gray-400 grid grid-cols-4 phone:flex gap-4 text-lg border-2 border-gray-900 p-2 rounded-md">
						{yearElements}
					</div>
				</div>
				{cardLayout}
			</div>
		</LayoutAlt>
	);
}
