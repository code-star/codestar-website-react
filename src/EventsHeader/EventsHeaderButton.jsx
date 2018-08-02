import React, {Component} from 'react';
import { Button } from '@material-ui/core';
import css from './EventsHeaderButton.module.css';

class EventsHeaderButton extends Component {
	render() {
		const {icon, label} = this.props;
		return(
			<Button
				className={css.button}
			>
				<div
					className={`row align-items-center mx-0 ${css.box}`}
				>
					<div className="col-12 p-0">
						{icon}
						{label}
						{/*TODO previous <BR> events*/}
					</div>
				</div>
			</Button>
		);
	}
}

export default EventsHeaderButton;
