import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
	const { cartItems, isLoading } = useSelector((store) => store.cart);
	const { isOpen } = useSelector((store) => store.modal);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculateTotals());
	}, [cartItems]);

	useEffect(() => {
		dispatch(getCartItems("random"));
	}, []);

	if (isLoading) {
		return (
			<div className='loading'>
				<h1>Loading...</h1>
			</div>
		);
	}

	return (
		<main>
			{/* `{isOpen && <Modal></Modal>}` is a conditional rendering statement in JSX. It checks if the
			`isOpen` variable is truthy (i.e., not `false`, `null`, `undefined`, `0`, `NaN`, or an empty
			string), and if it is, it renders the `<Modal>` component. If `isOpen` is falsy, it does not
			render the `<Modal>` component. */}
			{isOpen && <Modal></Modal>}
			<Navbar></Navbar>
			<CartContainer></CartContainer>
		</main>
	);
}
export default App;
