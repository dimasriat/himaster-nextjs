import Layout from "../components/Layout";
import { Container } from "../components/Mixin";

const gmaps = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977.5736082916894!2d110.85753515783222!3d-7.5589226986371685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1703a9577c13%3A0x71e559b1b5110e41!2sFakultas%20MIPA%20Universitas%20Sebelas%20Maret!5e0!3m2!1sid!2sid!4v1593011272312!5m2!1sid!2sid" style="width: 100%; height: 480px; border: 1px solid black;" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;

function CardSosmed(props) {
	return (
		<div className="col">
			<div className="card shadow">
				<div className="card-body">{props.children}</div>
			</div>
		</div>
	);
}

export default function ContactPage(props) {
	return (
		<Layout>
			<Container>
				<div className="row pb-3 m__h">
					<div className="col-lg col-12">
						{/* <p>Contact Page</p> */}
						<div dangerouslySetInnerHTML={{ __html: gmaps }} />
					</div>
					<div className="col-lg col-12">
						<h2 className="h1">Contact Us</h2>
						<h3 className="mt-3">Alamat</h3>
						<div className="row">
							<CardSosmed>
								Sekretariat: Lt.1 Gd.A FMIPA UNS Jl. Ir. Sutami
								36 A Surakarta 57126
							</CardSosmed>
						</div>
						<div className="row mt-3">
							<CardSosmed>himaster.mipa.uns@gmail.com</CardSosmed>
						</div>
						<h3 className="mt-3">Follow Us</h3>
						<div className="row">
							<CardSosmed>
								<a href="https://instagram.com/himaster.uns">
									Instagram
								</a>
							</CardSosmed>
							<CardSosmed>
								<a href="https://twitter.com/himaster_uns">
									Twitter
								</a>
							</CardSosmed>
						</div>
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
