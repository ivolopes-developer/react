import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedProductLayout from "./pages/SharedProductLayout";

function App() {
	const [user, setUser] = useState(null);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SharedLayout></SharedLayout>}>
					<Route index element={<Home></Home>}></Route>
					<Route path='about' element={<About></About>}></Route>
					<Route
						path='products'
						element={<SharedProductLayout></SharedProductLayout>}
					>
						<Route index element={<Products></Products>}></Route>
						<Route
							path=':productId'
							element={<SingleProduct></SingleProduct>}
						></Route>
					</Route>

					<Route
						path='login'
						element={<Login setUser={setUser} user={user}></Login>}
					></Route>
					<Route
						path='dashboard'
						element={
							<ProtectedRoute user={user}>
								<Dashboard user={user}></Dashboard>
							</ProtectedRoute>
						}
					></Route>
					<Route path='*' element={<Error></Error>}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
