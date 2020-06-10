import Line from "../components/Line";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = (props) => {
	return (
		<div className="container-fluid">
			<Line />
			<Navbar />
			<Footer />
			<Line />
		</div>
	);
};

export default Index;
