import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.components";
import Navigation from "./routes/Navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.components";
const Shop = () => {
	return <h1>I am the Shop</h1>;
};
const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<Navigation />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="/shop"
						element={<Shop />}
					/>
					<Route
						path="sign-in"
						element={<SignIn />}
					/>
				</Route>
			</Routes>
		</div>
	);
};

export default App;
