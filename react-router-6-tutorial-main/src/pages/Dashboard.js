const Dashboard = ({ user }) => {
	return (
		<section className='section'>
			<h4>Dashboard</h4>
			<hr />
			<h5>Hello, {user?.name}</h5>
			<h5>email: {user?.email}</h5>
		</section>
	);
};
export default Dashboard;
