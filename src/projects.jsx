import React from "react";

export default
function Projects() {
	const posts = [
		{
			name: "WebGL voxel engine",
			icon: "bi-box-fill",
			url: "https://elloramir.github.io/voxel-js",
			text: 'Learning WebGL by creating a "Minecraft clone" without Three.js or any other graphics libs.'
		},
		{
			name: "Aseprite file loader",
			icon: "bi-images",
			url: "https://github.com/elloramir/love-ase/",
			text: 'Typically, you need both the image and JSON data to read .ase files, but this library allows direct data extraction from the format specifications, saving a significant amount of time in game development.'
		},
		{
			name: "KAI",
			icon: "bi-card-text",
			url: "https://github.com/elloramir/kai/",
			text: "My personal template/framework for creating games using Love2D. It includes a compact yet complete implementation of physics, similar to how Box2D works."
		},
		{
			name: "Game Engine in C",
			icon: "bi-gear-fill",
			url: "https://github.com/elloramir/tinybox",
			text: "This is a fun project where I built a 2D game engine for small projects. The engine includes SDF font rendering."
		},
	];

	return (
		<>
		{
			posts.map((post, index) => (
				<div key={index} className="card mt-4">
					<div className="card-body">
						<h5 className="card-title pb-2 border-bottom">
							<i className={`bi ${post.icon} me-2`}></i>
							<span>{post.name}</span>
						</h5>
						<p className="card-text text-muted">{post.text}</p>
						<a href={post.url} target="_blank">
							<i className="bi bi-box-arrow-up-right"></i>
							<span> View</span>
						</a>
					</div>
				</div>	
			))
		}
		</>
	)
}