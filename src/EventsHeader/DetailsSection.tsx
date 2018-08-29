import React, { SFC } from 'react';
import { Typography, Button } from '@material-ui/core';
import { translate, TranslationFunction } from 'react-i18next';
import Container from '../Container/Container';
import Section from '../Section/Section';
import compose from 'recompose/compose';

// TODO improve types by replacing "any"
interface IDetailsSectionPropsInner {
	t: TranslationFunction;
	mEvent: any;
	formattedDate: string;
	descriptionElem: any;
}

interface IDetailsSectionPropsOuter {
	mEvent: any;
	formattedDate: string;
	descriptionElem: any;
}

export const DetailsSection: SFC<IDetailsSectionPropsInner> = ({
	t,
	mEvent,
	formattedDate,
	descriptionElem,
}) => {
	return (
		<Section scrollname="event-details" className="bg-white">
			<Container center>
				<div className="row">
					<div className="col-12">
						<Typography align="center" variant="title">
							{mEvent.name}
						</Typography>
						<Typography gutterBottom align="center" variant="subheading">
							{formattedDate}
						</Typography>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-md-8">{descriptionElem}</div>
					<div className="col-12 col-md-4">
						<img
							src={mEvent.coverUrl}
							alt={`Artistic background with text "${mEvent.name}"`}
							style={{ width: '100%' }}
						/>
						<Button
							color="primary"
							variant="raised"
							href={mEvent.link}
							className="mt-1"
						>
							{t('SIGN_UP')}
						</Button>
					</div>
				</div>
			</Container>
		</Section>
	);
};

export default compose<IDetailsSectionPropsInner, IDetailsSectionPropsOuter>(
	translate(['events'], { wait: true })
)(DetailsSection);
