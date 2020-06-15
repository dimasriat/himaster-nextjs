import Layout from "../components/Layout";
import { Container } from "../components/Mixin";

export default function EventPage(props) {
	const teams = props.teams;
	return (
		<Layout>
			<Container>
				<div className="row pb-3 m__h">
					<div className="col-12">
						<p>Event Page</p>
					</div>
				</div>
				<style jsx>{`
					.m__h {
						min-height: 720px;
					}
				`}</style>
			</Container>
		</Layout>
	);
}
