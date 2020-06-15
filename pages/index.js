import Layout from "../components/Layout";
import { Container, Bidang, VisiMisi } from "../components/Mixin";
import Link from "next/link";

export default function HomePage(props) {
	const teams = props.teams;
	return (
		<Layout>
			<Container id="sambutan">
				<div
					className="row justify-content-center align-items-center text-light"
					style={{ minHeight: 480 }}
				>
					<div className="col-lg-7 col-10 text-center w-100 h-100">
						<img src="/img/alpha-logo-jumbotron.png" className="img-fluid"/>
						<div className="pt-3">
							Himpunan Mahasiswa S1 Informatika UNS
						</div>
						<div className="pt-4">
							<Link href="/profil">
								<a className="btn btn-outline-light">Profil</a>
							</Link>
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<div className="row pb-3">
					<VisiMisi title="VISI">
						Membangun Program Studi S1 Informatika UNS sebagai yang
						terkemuka dan terdepan secara nasional dalam
						penyelenggaraan organisasi, penelitian, pengembangan
						sumber daya mahasiswa dan pengabdian pada masyarakat
						dalam bidang sistem dan teknologi informasi
					</VisiMisi>
					<VisiMisi title="MISI">
						<ol>
							<li>
								Mendukung mahasiswa S1 Informatika untuk dapat
								mengembangkan diri secara akademis dan
								non-akademis mahasiswa/i Program Studi S1
								Informatika
							</li>
							<li>
								mengajak membangun sinergi, relasi, kilaborasi,
								serta berkontribusi baik kepada internal maupun
								eksternal HIMASTER
							</li>
							<li>
								memberikan wadah untuk bersosialisasi,
								berkomunikasi, dan beraspirasi di lingkungan S1
								Informatika
							</li>
							<li>
								Membangun pemikiran mahasiswa S1 Informatika
								untuk terus berinovasi dan berprestasi dalam
								kancah nasional hingga internasional
							</li>
							<li>
								Merangkul seluruh civitas demi S1 Informatika
								yang terdepan, terkemuka, dan berkualitas
							</li>
						</ol>
					</VisiMisi>
				</div>
			</Container>
			<Container>
				<div className="row flex-wrap justify-content-center align-items-center py-3">
					{teams.map((team) =>
						team.id == "ketua" ? (
							<>
								<Bidang
									nama={team.name.toUpperCase()}
									svg={team.id}
									col="6"
									key={team.id}
								/>
								<div className="w-100" />
							</>
						) : (
							<Bidang
								nama={team.name.toUpperCase()}
								svg={team.id}
								col="4"
								key={team.id}
							/>
						)
					)}
				</div>
			</Container>
		</Layout>
	);
}
