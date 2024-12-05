function Cats() {
	const posts = [
		{
			name: "Miu",
			image: "https://i.imgur.com/y9TFow8.png",
		},
		{
			name: "Rita",
			image: "https://i.imgur.com/Kc6pQKI.jpeg",
		},
	];

	return (
		<>
		{
			posts.map((post, index) => (
				<div key={index} className="card mt-3">
					<img src={post.image} className="card-img-top" alt="My cat image (imagine something really cute)" />
					<div className="card-footer">
						<p className="card-text text-muted">
							<i className="bi bi-tag-fill me-2"></i>
							<span>Cat: <b> {post.name}</b></span>
						</p>
					</div>
				</div>	
			))
		}
		</>
	)
}