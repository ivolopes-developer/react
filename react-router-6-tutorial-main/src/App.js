import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home></Home>}>
					<Route path='about' element={<About></About>}></Route>
					<Route path='products' element={<Products></Products>}></Route>
					<Route path='*' element={<Error></Error>}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;