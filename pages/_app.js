import "../public/css/bootstrap.min.css";
import "../public/css/style.css";
import { teams } from "../public/models/api.json";

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Component {...pageProps} teams={teams} />
		</>
	);
};

export default App;
