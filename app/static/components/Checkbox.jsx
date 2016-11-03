import React from 'react';

import CheckboxAction from '../actions/CheckboxAction.js';

export default React.createClass({
  onChange(e) {
    CheckboxAction.toggleChecked(e.target.checked);
  },

  render() {
    return (
      <input type="checkbox" checked={this.props.checked} onChange={this.onChange} />
    );
  }
});
