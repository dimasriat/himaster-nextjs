import Link from "next/link";

function Button(props) {
	return (
		<>
			<Link href={props.href}>
				<a>{props.children}</a>
			</Link>

			<style jsx>{`
				a {
					text-decoration: none;
				}
				a:hover {
					text-decoration: underline;
				}
			`}</style>
		</>
	);
}

function Logo() {
	return (
		<div className="col-lg-auto col-12 py-1 text-center">
			<h1 className="h4 font-weight-bold">
				<Link href="/">
					<a>HIMASTER ALPHA</a>
				</Link>
			</h1>
			<style jsx>{`
				a {
					text-decoration: none;
				}
				a:hover {
					text-decoration: underline;
				}
			`}</style>
		</div>
	);
}

function NavMenu() {
	return (
		<div className="col-lg-auto col-12 py-1 align-self-center font-weight-bold text-center">
			<ul className="list-inline my-0">
				<li className="list-inline-item">
					<Button href="/profil">Profil</Button>
				</li>
				<li className="list-inline-item pl-3">
					<Button href="/galeri">Galeri</Button>
				</li>
				<li className="list-inline-item pl-3">
					<Button href="/event">Event</Button>
				</li>
				<li className="list-inline-item pl-3">
					<Button href="/team">Team</Button>
				</li>
				<li className="list-inline-item pl-3">
					<Button href="/contact">Contact</Button>
				</li>
			</ul>
		</div>
	);
}

function NavSearch() {
	return (
		<div className="col-lg-6 col-12 py-1">
			<form action="/" method="get">
				<input
					type="text"
					className="form-control w-100"
					placeholder="search"
				/>
			</form>
		</div>
	);
}

export default function Navbar() {
	return (
		<div className="row justify-content-center border-bottom py-2">
			<div className="col-lg-10 col-12">
				<div className="row justify-content-between align-items-center">
					<Logo />
					{/* <NavSearch /> */}
					<NavMenu />
				</div>
			</div>
		</div>
	);
}
