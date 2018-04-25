import React from 'react';
import Section from '../Section/Section';
import Container from '../Container/Container';
import CaseHeader from '../CaseHeader/CaseHeader';

const ClientCase = props => {
	return (
		<div>
			{/* <CaseHeader {...props} /> */}
			<section className="mt-5">
				<Container>
					<div className="row">
						<div className="col">
							<h1>{props.client}</h1>
							<h3>{props.title}</h3>
							<img src={props.image} className="img-fluid" alt="" />
						</div>
					</div>
					<div className="row">
						<div className="col mt-3">{props.details}</div>
					</div>
				</Container>
			</section>
		</div>
	);
};

export default ClientCase;
