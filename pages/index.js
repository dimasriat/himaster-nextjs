import Layout from "../components/Layout";
import { Container, Bidang, VisiMisi } from "../components/Mixin";

const index = (props) => {
	const teams = props.teams;
	return (
		<Layout>
			<Container id="sambutan">
				<div
					className="row justify-content-center align-items-center text-light"
					style={{ minHeight: 480 }}
				>
					<div className="col-lg-7 col-10 text-center w-100 h-100">
						<div className="display-4 font-weight-bold">
							HIMASTER ALPHA 2020
						</div>
						<div className="pt-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</div>
						<div className="pt-4">
							<a className="btn btn-outline-light" href="#">
								about us
							</a>
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<div class="row pb-3">
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
				<div class="row flex-wrap justify-content-center align-items-center py-3">
					{/* <Bidang nama="KETUA DAN WAKIL" col="6" svg="ketua" />
					<div className="w-100" />
					<Bidang nama="KEBENDAHARAAN" col="4" svg="kebendaharaan" />
					<Bidang
						nama="PENGEMBANGAN TEKNOLOGI"
						col="4"
						svg="pemtek"
					/>
					<Bidang nama="KESEKRETARIATAN" col="4" svg="sekre" />
					<Bidang nama="MEDIA DAN INFORMASI" col="4" svg="medif" />
					<Bidang
						nama="PPENGEMBAANGAN SUMBER DAYA MANUSIA"
						col="4"
						svg="psdm"
					/>
					<Bidang nama="MINAT DAN BAKAT" col="4" svg="mikat" />
					<Bidang
						nama="JARINGAN DAN KERJAMSAMA"
						col="4"
						svg="jangker"
					/>
					<Bidang nama="KEMANDIRIAN DAN LEMBAGA" col="4" svg="kl" />
					<Bidang nama="PENGEMBANGAN ORGANISASI" col="4" svg="po" /> */}
					{teams.map((team) =>
						team.id == "ketua" ? (
							<>
								<Bidang
									nama={team.name.toUpperCase()}
									svg={team.id}
									col="6"
								/>
								<div className="w-100" />
							</>
						) : (
							<Bidang
								nama={team.name.toUpperCase()}
								svg={team.id}
								col="4"
							/>
						)
					)}
				</div>
			</Container>
		</Layout>
	);
};

export default index;
