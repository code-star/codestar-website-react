import React, { Component, SFC, CSSProperties, ComponentType } from 'react';

export type ComponentTypePromise = Promise<{
  default: ComponentType;
}>;

type AsyncComponentProps = Readonly<{
  fullHeight: boolean;
  component: () => ComponentTypePromise;
}>;

type AsyncComponentState = Readonly<{
  component: false | ComponentType;
}>;

export default class AsyncComponent extends Component<
  AsyncComponentProps,
  AsyncComponentState
> {
  constructor(props: AsyncComponentProps) {
    super(props);

    this.state = {
      component: false,
    };
  }

  public async componentDidMount() {
    const { default: component } = await this.props.component();
    this.setState({
      component,
    });
  }

  public render() {
    const Component = this.state.component;

    if (!Component) {
      return null;
    }

    if (this.props.fullHeight) {
      return (
        <FullHeight>
          <Component {...this.props} />
        </FullHeight>
      );
    }

    return <Component {...this.props} />;
  }
}

const FullHeight: SFC<{}> = props => {
  const styles: CSSProperties = {
    minHeight: '100vh',
  };
  return <div style={styles}>{props.children}</div>;
};
