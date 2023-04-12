import { Link } from "react-router-dom";

const Error = () => {
	return (
		<section className='section'>
			<h2>404 - Page not Found</h2>
			<p>You're lost...</p>
			<Link to='/' className='btn'>
				Home Page
			</Link>
		</section>
	);
};
export default Error;
