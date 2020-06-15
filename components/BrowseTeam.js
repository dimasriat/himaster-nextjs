function Judul(props) {
	return (
		<div className="font-weight-bold text-center my-3 h3">
			{props.children}
		</div>
	);
}

function Foto(props) {
	return (
		<div className="row justify-content-center">
			<div className="col-lg-6 col-12">
				<img
					src={`/img/himaster/${props.src}`}
					className="img-fluid shadow rounded"
				/>
			</div>
		</div>
	);
}

function PersonCard(props) {
	return (
		<div className="card shadow w-100">
			<div className="card-body text-center">
				<div className="row justify-content-center">
					<div className="col-6 mb-3">
						<img
							src={`/img/himaster/${props.foto}`}
							className="img-fluid rounded"
						/>
					</div>
				</div>
				<b className="d-block">{props.nama}</b>
				<div className="d-block">{props.jabatan}</div>
			</div>
		</div>
	);
}

export default function BrowseTeam(props) {
	const selectedTeam =
		props.teams &&
		props.teams.filter((team) => team.id == props.currentTeam);
	return (
		<div className="col-lg-9 col-12 order-1 order-lg-2">
			{selectedTeam &&
				selectedTeam.map((team) => (
					<div key={team.name}>
						<Judul>{team.name}</Judul>
						<Foto src={team.foto} />
						<div className="row flex-wrap justify-content-center">
							{team.anggota.map((anggota) => (
								<div
									key={anggota.nama}
									className="col-lg-4 col-12 mt-3"
								>
									<PersonCard
										foto={anggota.foto}
										nama={anggota.nama}
										jabatan={anggota.jabatan}
									/>
								</div>
							))}
						</div>
					</div>
				))}
		</div>
	);
}
