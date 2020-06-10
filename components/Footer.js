import Color from "../utils/Color";

const Footer = (props) => {
	const Color = props.Color;
	return (
		<div className="ctx">
			<div className="footer-text">Copyright 2020 (c) HIMASTER ALPHA</div>
			<style jsx>{`
				.ctx {
					padding: 2rem 0 4rem;
					background-color: ${Color.bg};
					color: ${Color.font};
					border-top: 1px solid ${Color.secondary};
				}
				.footer-text {
					padding: 0 1rem;
					text-align: center;
				}
			`}</style>
		</div>
	);
};

export default Footer;
