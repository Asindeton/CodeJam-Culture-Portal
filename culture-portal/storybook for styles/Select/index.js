import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SelectWrapper extends Component {
  state = {
    value: null
  }

  onChange = (value) => {
    this.setState({
      value,
    })
    this.props.onChange(value)
  }

  render() {
    return (
      <Select { ...this.props } value={this.state.value} onChange={this.onChange} />
    )
  }
}

SelectWrapper.defaultProps = {
  onChange: () => {}
}

export default SelectWrapper;
