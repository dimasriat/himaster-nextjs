import Line from "./Line";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
	return (
		<div className="container-fluid bg-light">
			<Line />
			<Navbar />
			{props.children}
			<Footer />
			<Line />
		</div>
	);
};

export default Layout;
