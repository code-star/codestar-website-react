import React, { SFC } from 'react';
import { Typography, Button, Hidden, withStyles } from '@material-ui/core';
import Container from '../Container/Container';
import { translate, TranslationFunction } from 'react-i18next';
import { Link } from 'react-scroll';
import css from './EventsHeader.module.css';
import { purple } from '@material-ui/core/colors';
import compose from 'recompose/compose';

// TODO improve types by replacing "any"
interface IHeaderContentPropsInner {
	t: TranslationFunction;
	classes: Record<string, string>;
	mEvent: any;
	formattedDate: string;
	children?: React.ReactNode;
}

interface IHeaderContentPropsOuter {
	mEvent: any;
	formattedDate: string;
}

const styles = (theme: any) => ({
	button: {
		color: theme.palette.getContrastText(purple[500]),
		backgroundColor: purple[500],
		'&:hover': {
			color: 'white',
			backgroundColor: purple[700],
		},
	},
});

export const HeaderContent: SFC<IHeaderContentPropsInner> = ({
	t,
	classes,
	mEvent,
	formattedDate,
	children,
}) => {
	return (
		<Container fullHeight center className="mt-5 mt-sm-2 mt-md-0">
			<div className="row">
				<div className="col-12">
					<Typography
						align="center"
						variant="display1"
						className={css.nextEventText}
					>
						{t('OUR_NEXT_EVENT')}
					</Typography>
					<Hidden mdUp>
						<Typography
							align="center"
							variant="display2"
							className={css.nextEventTitle}
						>
							{mEvent.name}
						</Typography>
					</Hidden>
					<Hidden smDown>
						<Typography
							align="center"
							variant="display4"
							className={css.nextEventTitle}
						>
							{mEvent.name}
						</Typography>
					</Hidden>
					<Typography
						gutterBottom
						align="center"
						variant="display2"
						className={css.nextEventText}
					>
						{formattedDate}
					</Typography>
					<div style={{ textAlign: 'center' }}>
						<Button
							color="primary"
							variant="raised"
							href={mEvent.link}
							className={`mr-1 ${classes.button}`}
						>
							{t('SIGN_UP')}
						</Button>
						<Link to="event-details" hashSpy smooth>
							<Button variant="contained">{t('MORE_INFO')}</Button>
						</Link>
						<div className="mt-5">{children}</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default compose<IHeaderContentPropsInner, IHeaderContentPropsOuter>(
	translate(['events'], { wait: true }),
	withStyles(styles)
)(HeaderContent);
