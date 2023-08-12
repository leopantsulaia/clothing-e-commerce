import Directory from "./components/directory/directory.component";

const App = () => {
	const categories = [
		{
			id: 1,
			title: "hats",
			imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Panama_hat.jpg/1024px-Panama_hat.jpg",
		},
		{
			id: 2,
			title: "jackets",
			imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Leather_Jacket_%2851011162080%29.jpg/1280px-Leather_Jacket_%2851011162080%29.jpg",
		},
		{
			id: 3,
			title: "shoes",
			imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Black_Converse_sneakers.JPG/1920px-Black_Converse_sneakers.JPG",
		},
		{
			id: 4,
			title: "women",
			imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Pierre_Auguste_Renoir_-_Woman_in_a_Flowered_Hat_-_Google_Art_Project.jpg/800px-Pierre_Auguste_Renoir_-_Woman_in_a_Flowered_Hat_-_Google_Art_Project.jpg",
      imgDesc: 'Woman in a Flowered Hat (1889), by Pierre-Auguste Renoir: Straw hat with brim decorated with cloth flowers and ribbons'
    },
		{
			id: 5,
			title: "men",
			imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Charles-vernet-top-hat.jpg",
      imgDesc: "Carle Vernet's 1796 painting showing two decadent French 'Incredibles' greeting each other, one with what appears to be a top hat, perhaps its first recorded appearance.",
		},
	];

	return (
		<div className="App">
      <Directory categories={categories} />
		</div>
	);
};

export default App;
