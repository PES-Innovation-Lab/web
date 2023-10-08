import React from 'react'
import { useState } from 'react';

export default function Cards(props) {
    const { name, pfp } = props;
    // const [title,setTitle] = useState(name)
  return (
		<div
			// onMouseEnter={() => setTitle('KNOW MORE')}
			// onMouseLeave={() => setTitle(name)}
			className="group relative cursor-pointer rounded-lg  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
		>
			{/* <img
				className="h-[400px] aspect-auto cursor-pointer transition-transform duration-500"
				src={pfp}
				alt="pfp"
			/> */}
			<img
				className="h-[400px] aspect-auto cursor-pointer transition-transform duration-500  group-hover:scale-125"
				src={pfp}
				alt=""
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
			<div className="absolute inset-0 flex translate-y-[40%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[30%]">
				<h1 className="mb-7 text-3xl font-bold text-gray-300 font-martian-mono">
					{name.toUpperCase()}
				</h1>
				{/* <p className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{course} | {batch}</p> */}
				{/* <div className="flex items-center justify-center font-martian-mono text-white text-lg">
					Know More
				</div> */}
			</div>
		</div>
  );
}
{/* <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={pfp} alt="" /> */}