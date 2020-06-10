const App = ({ Component, pageProps }) => {
	return (
		<>
			<Component {...pageProps} />
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
