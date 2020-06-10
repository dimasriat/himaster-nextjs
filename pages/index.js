import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FakeIMG from "../components/FakeIMG";
import API from "../public/models/api.json"

const VisiMisi = (props) => {
	const Color = props.Color;
	// const API = props.API;
	return (
		<div className="jumbotron">
			<div className="item">
				<h2>Visi</h2>
				<p>{API.visi}</p>
			</div>
			<div className="item">
				<h2>Misi</h2>
				<p>
					<ol>
						{API.misi.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ol>
				</p>
			</div>
			<style jsx>{`
				.item {
					width: 100%;
					padding: 0 1rem;
					margin: 1rem 0;
				}

				ol {
					padding: 0;
				}

				li,
				p {
					line-height: 1.5rem;
					padding: 0 1rem;
				}

				.jumbotron {
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: flex-start;
					border-top: 1px solid ${Color.secondary};
					background-color: rgb(250, 250, 250);
					padding: 5rem 0;
				}
				h2 {
					color: ${Color.font};
					font-size: 4rem;
					margin: 0;
				}
				@media only screen and (min-width: 48rem) {
					.jumbotron {
						flex-direction: row;
						padding: 4rem 8rem;
						margin-top: 0;
						align-items: flex-start;
						justify-content: center;
					}
					.item {
						margin: 0;
					}
					li,
					p {
						padding: 0;
					}
				}
			`}</style>
		</div>
	);
};

const Jumbotron = (props) => {
	const windowHeight = props.windowHeight;
	const Color = props.Color;
	return (
		<div className="jumbotron">
			<div className="item">
				<h1>HIMASTER ALPHA 2020</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nunc eget pellentesque quam, convallis aliquet nulla.
					Maecenas a felis tristique, ullamcorper est in, sodales
					urna. Mauris iaculis sapien commodo posuere auctor.
				</p>
				<div className="jumbotron-button">
					<button>The Team</button>
				</div>
			</div>
			<div className="item">
				<FakeIMG Color={Color} />
			</div>
			<style jsx>{`
				.item {
					width: 100%;
					padding: 0 1rem;
				}
				.jumbotron {
					width: 100%;
					min-height: ${windowHeight};
					display: flex;
					flex-direction: column-reverse;
					align-items: center;
					justify-content: center;
					padding: 5rem 0;
					background-color: rgb(235, 235, 235);
				}
				h1 {
					color: ${Color.font};
					font-size: 4rem;
					text-align: center;
				}
				.jumbotron-button {
					padding: 1rem 0;
				}
				button {
					width: 100%;
					background-color: ${Color.primary};
					font-size: 1rem;
					color: white;
					padding: 1rem 0;
					border-radius: 0.5rem;
					border: none;
					font-weight: bold;
					box-shadow: 0 0.5rem 1rem
						rgba(
							${Color.primary.slice(
								4,
								Color.primary.slice.length - 1
							)},
							0.25
						);
				}
				@media only screen and (min-width: 48rem) {
					.jumbotron {
						flex-direction: row-reverse;
						padding: 0 8rem;
						margin-top: 0;
					}
				}
			`}</style>
		</div>
	);
};

const Home = (props) => {
	const windowHeight = props.windowHeight;
	const Color = props.Color;
	const API = props.API;
	return (
		<div>
			<Navbar
				Color={Color}
				light={props.light}
				setLight={props.setLight}
				menu={props.menu}
				title={API.title}
			/>
			<Jumbotron windowHeight={windowHeight} Color={Color} />
			<VisiMisi windowHeight={windowHeight} Color={Color} API={API} />
			<Footer Color={Color} />
		</div>
	);
};

export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	const res = await fetch("http://localhost:3000/models/api.json");
	const API = await res.json();

	// By returning { props: posts }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			API: API,
		},
	};
}


export default Home;
