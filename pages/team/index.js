import Layout from "../../components/Layout";
import SidebarTeam from "../../components/SidebarTeam";
import BrowseTeam from '../../components/BrowseTeam'

export default function Teams(props) {
	const teams = props.teams;
	return (
		<Layout>
			<div className="row border-bottom py-2 flex-wrap">
				<SidebarTeam teams={teams}/>
				<BrowseTeam />
			</div>
		</Layout>
	);
}
