import React from 'react';
import { Typography } from '@material-ui/core';
import Container from '../Container/Container';
// import CaseHeader from '../CaseHeader/CaseHeader';

const CaseDetails = props => (
	<div>
		{/* <CaseHeader {...props} /> */}
		<section className="py-3">
			<Container marginTopNavBar>
				<div className="row justify-content-center">
					<div className="col-12 col-lg-8">
						<Typography variant="display3" gutterBottom>
							{props.client}
						</Typography>
						<Typography variant="headline" gutterBottom>
							{props.title}
						</Typography>
						<img src={props.image} className="img-fluid" alt="" />
					</div>
				</div>
			</Container>
		</section>
		<section className="py-3" style={{ backgroundColor: '#eeeeee' }}>
			<Container>
				<div className="row justify-content-center">
					<div className="col-12 col-lg-8 mt-3">
						{props.details && React.createElement(props.details, {})}
					</div>
				</div>
			</Container>
		</section>
	</div>
);

export default CaseDetails;
