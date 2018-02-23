import React from 'react';

class DynamicImport extends React.Component {
  state = {
    component: null,
  };

  componentWillMount() {
    this.props.load().then(mod =>
      this.setState(() => ({
        component: mod.default,
      })));
  }
  render() {
    const { component } = this.state;
    return this.props.children(component);
  }
}

const Wrapper = props => (
  <DynamicImport load={() => import(`${props.componentPath}`)}>
    {Component => (Component === null ? <h1>Loading</h1> : <Component {...props} />)}
  </DynamicImport>
);

export default Wrapper;
