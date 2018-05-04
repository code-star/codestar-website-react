import React from 'react';
import Container from '../Container/Container';
import Typography from 'material-ui/Typography';
// import CaseHeader from '../CaseHeader/CaseHeader';

const CaseDetails = props => (
	<div>
		{/* <CaseHeader {...props} /> */}
		<section className="mt-5">
			<Container>
				<div className="row">
					<div className="col">
						<Typography variant="display3" gutterBottom>
							{props.client}
						</Typography>
						<Typography variant="headline" gutterBottom>
							{props.title}
						</Typography>
						<img src={props.image} className="img-fluid" alt="" />
					</div>
				</div>
				<div className="row">
					<div className="col mt-3">
						{props.details && React.createElement(props.details, {})}
					</div>
				</div>
			</Container>
		</section>
	</div>
);

export default CaseDetails;
