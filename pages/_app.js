import color from "../utils/Color";
import menu from "../utils/Menu";
import { useState, useEffect } from "react";
//import API from "../public/models/api.json";

const App = ({ Component, pageProps }) => {
	const [light, setLight] = useState(false);
	// const Color = color[light ? "LIGHT" : "DARK"];
	const Color = color["HIMASTER"];
	const [API, setAPI] = useState({});
	const [windowHeight, setwindowHeight] = useState("100%");
	useEffect(() => {
		setwindowHeight(`${window.innerHeight}px`);
		fetch("/models/api.json")
			.then((res) => res.json())
			.then((json) => setAPI(json));
	}, []);

	return (
		<>
			<Component
				{...pageProps}
				Color={Color}
				light={light}
				setLight={setLight}
				menu={menu}
				windowHeight={windowHeight}
				// API={API}
			/>
			<style jsx global>{`
				* {
					box-sizing: border-box;
					font-family: "Gilroy", sans-serif;
				}
				@font-face {
					font-family: "Gilroy";
					src: url("/fonts/font-regular.ttf") format("truetype");
					font-weight: normal;
					font-style: normal;
				}
				@font-face {
					font-family: "Gilroy";
					src: url("/fonts/font-bold.ttf") format("truetype");
					font-weight: bold;
					font-style: normal;
				}

				body {
					margin: 0;
					padding: 0;
					color: ${Color.font};
					background-color: ${Color.bg};
				}
				html,
				body,
				body > div:first-child,
				div#_next,
				div#_next > div,
				div#_next > div > div {
					min-height: 100%;
				}
			`}</style>
		</>
	);
};

export default App;
