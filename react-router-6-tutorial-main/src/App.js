import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";

function App() {
	return (
		<BrowserRouter>
			<nav>
				<Link style={{ marginRight: "20px" }} to='/'>
					Home
				</Link>
				<Link style={{ marginRight: "20px" }} to='about'>
					About
				</Link>
				<Link style={{ marginRight: "20px" }} to='products'>
					Products
				</Link>
			</nav>
			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='about' element={<About></About>}></Route>
				<Route path='products' element={<Products></Products>}></Route>
				<Route path='*' element={<Error></Error>}></Route>
			</Routes>
			<footer>This is a footer</footer>
		</BrowserRouter>
	);
}

export default App;
