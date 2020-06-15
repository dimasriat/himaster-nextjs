import Layout from "../components/Layout";
import { Container, Bidang, VisiMisi } from "../components/Mixin";

export default function HomePage(props) {
	const teams = props.teams;
	return (
		<Layout>
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
		</Layout>
	);
}
