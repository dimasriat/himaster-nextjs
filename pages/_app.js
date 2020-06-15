import "../public/css/bootstrap.min.css";
import "../public/css/style.css";
import { teams } from "../public/models/api.json";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} teams={teams} />
		</>
	);
}
