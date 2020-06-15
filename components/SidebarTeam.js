import Link from "next/link";

export default function SidebarTeam(props) {
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
}
