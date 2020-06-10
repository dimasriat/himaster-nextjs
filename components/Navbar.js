import Link from "next/link";

const Navbar = () => {
	return (
		<div className="row justify-content-center border-bottom py-2">
			<div className="col-lg-10 col-12">
				<div className="row justify-content-between align-items-center">
					<div className="col-lg-auto col-12 py-1 text-center">
						<h1 className="h4">
							<Link href="/">
								<a>Himaster 2020</a>
							</Link>
						</h1>
					</div>
					<div className="col-lg-6 col-12 py-1">
						<form action="/" method="get">
							<input
								type="text"
								className="form-control w-100"
								placeholder="search"
							/>
						</form>
					</div>
					<div className="col-lg-auto col-12 py-1 align-self-center font-weight-bold text-center">
						<ul className="list-inline my-0">
							<li className="list-inline-item">Profil</li>
							<li className="list-inline-item pl-3">Galeri</li>
							<li className="list-inline-item pl-3">Event</li>
							<li className="list-inline-item pl-3">Team</li>
							<li className="list-inline-item pl-3">Contact</li>
						</ul>
					</div>
				</div>
			</div>
			<style jsx>{`
				a {
					color: black;
					text-decoration: none;
				}
			`}</style>
		</div>
	);
};

export default Navbar;
