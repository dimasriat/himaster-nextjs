import Navbar from "./Navbar";

function Line() {
	return (
		<div className="row">
			<div className="col colorLine"></div>
		</div>
	);
}

function Footer() {
	return (
		<div className="row justify-content-center">
			<div className="col-12 col-lg-10">
				<div className="row justify-content-center text-muted">
					<div className="col-auto">
						<div style={{ margin: "1rem 0 6rem" }}>
							2020 himaster.uns.mipa.ac.id | pemtek chill
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Layout(props) {
	return (
		<div className="container-fluid bg-light">
			<Line />
			<Navbar />
			{props.children}
			<Footer />
			<Line />
		</div>
	);
}
