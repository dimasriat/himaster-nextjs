import Layout from "../components/Layout";
import { Container, VisiMisi } from "../components/Mixin";

function LogoLayout(props) {
	const [orderLogo, orderText] = props.switch ? [1, 2] : [2, 1];
	return (
		<div className="row pb-3 align-items-center">
			<div className={`col-lg col-12 py-3 order-lg-${orderLogo}`}>
				<img src={props.src} className="img-fluid" />
			</div>
			<div className={`col-lg col-12 py-3 order-lg-${orderText}`}>
				<ol className="m-0">
					{props.children.map((item) => (
						<li key={item} className="text-justify mb-2">
							{item}
						</li>
					))}
				</ol>
			</div>
		</div>
	);
}

function FilosofiLogo() {
	const filosofi = [
		"Lambang alpha itu berarti terdepan sama dengan filosofi nama HIMASTER ALPHA",
		"Lambang alpha yang diletakkan ditengah berartikan bahwa HIMASTER ALPHA ini ditempatkan untuk berperan aktif dan seimbang membangun Informatika ini secara internal maupun eksternal",
		"Pemilihan warna solid sekaligus eksentrik sebagai harapan HIMASTER ALPHA bisa menjadi organisasi yang berbasis kekeluargaan dan menjadi organisasi yang kreatif dan berani beda",
		"Kolaborasi merupakan perwujudan dari misi HIMASTER ALPHA untuk membangun sinergi, relasi, kolaborasi, serta kontribusi baik kepada internal maupun eksternal HIMASTER",
		"Aksi merupakan perwujudan dari sikap anggota HIMASTER untuk bersinergi serta membangun HIMASTER menjadi organisasi yang lebih baik dan dapat bermanfaat bagi anggota serta masyarakatnya",
		"Kreasi merupakan perwujudan dari hasil karya anggota HIMASTER untuk membangun HIMASTER menjadi organisasi yang lebih baik dan dapat dirasakan manfaatnya baik untuk anggota maupun masyarakatnya",
	];
	return (
		<Container>
			<div className="row pb-3">
				<div className="col-12">
					<p className="display-4 font-weight-bold text-center">
						Filosofi Logo
					</p>
				</div>
			</div>
			<LogoLayout src="/img/himaster_ori.png">
				{[
					"Tulisan Universitas Sebelas Maret menunjukkan bahwa HIMASTER berkedudukan di bawah naungan Universitas Sebelas Maret.",
					"Bentuk perisai menggambarkan bahwa HIMASTER memiliki filosofi layaknya sebuah antivirus yang bisa memberikan solusi atas masalah-masalah yang terdapat di masyarakat dengan mengaplikasikan ilmu yang dimilikinya.",
					"Cahaya di dalam perisai menggambarkan bahwa HIMASTER berusaha memberikan manfaat dalam bidang teknologi informasi dan komunikasi kepada masyarakat.",
					"Huruf “I” dan “K” pada bagian tengah menunjukkan Program Studi S-1 Informatika yang sebelumnya bernama Jurusan S-1 Ilmu Komputer Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Sebelas Maret.",
					"Pemancar yang menyusun huruf “I” bermakna bahwa HIMASTER selalu mengembangkan jaringan dan kerja sama yang baik dengan pihak universitas dan/atau luar universitas.",
					"Laptop yang menyusun huruf “K” mewakili identitas dari mahasiswa Program Studi S-1 Informatika.",
					"Bentuk pita yang di dalamnya terdapat tulisan HIMASTER menggambarkan hubungan yang erat dan solid antarpengurus HIMASTER.",
				]}
			</LogoLayout>
			<LogoLayout src="/img/alpha-logo-big.png" switch>
				{[
					"Lambang alpha itu berarti terdepan sama dengan filosofi nama HIMASTER ALPHA",
					"Lambang alpha yang diletakkan ditengah berartikan bahwa HIMASTER ALPHA ini ditempatkan untuk berperan aktif dan seimbang membangun Informatika ini secara internal maupun eksternal",
					"Pemilihan warna solid sekaligus eksentrik sebagai harapan HIMASTER ALPHA bisa menjadi organisasi yang berbasis kekeluargaan dan menjadi organisasi yang kreatif dan berani beda",
					"Kolaborasi merupakan perwujudan dari misi HIMASTER ALPHA untuk membangun sinergi, relasi, kolaborasi, serta kontribusi baik kepada internal maupun eksternal HIMASTER",
					"Aksi merupakan perwujudan dari sikap anggota HIMASTER untuk bersinergi serta membangun HIMASTER menjadi organisasi yang lebih baik dan dapat bermanfaat bagi anggota serta masyarakatnya",
					"Kreasi merupakan perwujudan dari hasil karya anggota HIMASTER untuk membangun HIMASTER menjadi organisasi yang lebih baik dan dapat dirasakan manfaatnya baik untuk anggota maupun masyarakatnya",
				]}
			</LogoLayout>
		</Container>
	);
}

export default function HomePage(props) {
	const teams = props.teams;
	return (
		<Layout>
			<FilosofiLogo />
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
