import React, { Component } from 'react';

const FullHeight = props => {
	const styles = {
		minHeight: '100vh',
	};
	return <div style={styles}>{props.children}</div>;
};

export default class AsyncComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			component: null,
		};
	}

	async componentDidMount() {
		const { default: component } = await this.props.component();

		this.setState({
			component: component,
		});
	}

	render() {
		const C = this.state.component;

		// TODO
		// Check if it is a JSX component
		// Add spinner

		return this.props.fullHeight ? (
			<FullHeight>{C ? <C {...this.props} /> : null}</FullHeight>
		) : null;
	}
}
