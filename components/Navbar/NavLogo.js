import React from "react";
import Link from "next/link";

const NavLogo = (props) => {
	const Color = props.Color;
	return (
		<div className="navbar-logo">
			<Link href="/">
				<a>{props.title}</a>
			</Link>
			<style jsx>{`
				.navbar-logo {
					font-weight: bold;
					font-size: 1.25rem;
					margin: 0 1rem;
				}
				.navbar-logo a {
					color: ${Color.font};
					text-decoration: none;
				}
			`}</style>
		</div>
	);
};

export default NavLogo;
