export function Container(props) {
	return (
		<div
			className="row justify-content-center border-bottom py-2"
			id={props.id}
		>
			<div className="col-lg-10 col-12">{props.children}</div>
		</div>
	);
}

export function VisiMisi(props) {
	return (
		<div className="col-lg col-12 mt-3">
			<div className="card shadow w-100 h-100">
				<div className="card-body">
					<div className="display-4 font-weight-bold">
						{props.title}
					</div>
					<div className="pt-3 text-justify">{props.children}</div>
				</div>
			</div>
		</div>
	);
}

export function Bidang(props) {
	return (
		<div className={`col-lg-${props.col} col-12 mb-3`}>
			<div className="card shadow w-100">
				<div className="card-body">
					<div className="row align-items-center justify-content-center">
						<div className="col-lg-4 col-3">
							{props.svg != "" && (
								<div class="w-100 text-center my-3">
									<img
										className="w-100"
										src={`/svg/${props.svg}.svg`}
										style={{ color: "orange" }}
									/>
								</div>
							)}
						</div>
						<div className="d-none d-lg-block w-100"></div>
						<div className="col-lg-auto col">
							<a
								className="btn btn-primary text-light display-5 w-100"
								href={`/team/${props.svg}`}
							>
								{props.nama}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
