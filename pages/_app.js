import "../public/css/bootstrap.min.css";
import "../public/css/style.css";

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
};

export default App;
