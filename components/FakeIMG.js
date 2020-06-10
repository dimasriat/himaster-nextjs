const FakeIMG = (props) => {
	const Color = props.Color;
	return (
		<div className="fakeimg">
			<style jsx>{`
				.fakeimg {
					width: 100%;
					height: 360px;
					background-color: ${Color.secondary};
					border-radius: 0.5rem;
					// box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.25)
				}
			`}</style>
		</div>
	);
};

export default FakeIMG;
