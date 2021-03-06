import Layout from "../../components/Layout";
import SidebarTeam from "../../components/SidebarTeam";
import BrowseTeam from '../../components/BrowseTeam'
import { useRouter } from "next/router";


export default function Teams(props) {
	const teams = props.teams;
	const router = useRouter();
	const { name } = router.query;
	return (
		<Layout>
			<div className="row border-bottom py-2 flex-wrap">
				<SidebarTeam teams={teams} currentTeam={name} />
				<BrowseTeam teams={teams} currentTeam={name} />
			</div>
		</Layout>
	);
}
