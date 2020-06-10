import Layout from "../../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = (props) => {
	const teams = props.teams;
	return (
		<div className="col-12 col-lg-3 border-right order-2 order-lg-1">
			<div className="font-weight-bold text-center my-3 h4">TEAM</div>
			<ul className="nav flex-column nav-pills">
				{teams.map((team) => (
					<li className="nav-items w-100 text-right">
						<Link href={`/team/${team.id}`}>
							<a
								className={`nav-link ${
									team.id == props.currentTeam ? "active" : ""
								}`}
							>
								{team.name}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

const BrowseTeam = (props) => {
	const selectedTeam = props.teams.filter(
		(team) => team.id == props.currentTeam
	);
	return (
		<div className="col-lg-9 col-12 order-1 order-lg-2">
			{selectedTeam.map((team) => (
				<div>
					<div className="font-weight-bold text-center my-3 h3">
						{team.name}
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-6 col-12">
							<img
								src={`/img/himaster/${team.foto}`}
								className="img-fluid shadow rounded"
							/>
						</div>
					</div>
					<div className="row flex-wrap justify-content-center">
						{team.anggota.map((anggota) => (
							<div className="col-lg-4 col-12 mt-3">
								<div className="card shadow w-100">
									<div className="card-body text-center">
										<div className="row justify-content-center">
											<div className="col-6 mb-3">
												<img
													src={`/img/himaster/${anggota.foto}`}
													className="img-fluid rounded"
												/>
											</div>
										</div>
										<b className="d-block">
											{anggota.nama}
										</b>
										<div className="d-block">
											{anggota.jabatan}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

const Teams = (props) => {
	const teams = props.teams;
	const router = useRouter();
	const { name } = router.query;
	return (
		<Layout>
			<div className="row border-bottom py-2 flex-wrap">
				<Sidebar teams={teams} currentTeam={name} />
				<BrowseTeam teams={teams} currentTeam={name} />
			</div>
		</Layout>
	);
};

export default Teams;
