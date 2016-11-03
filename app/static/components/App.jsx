import React from 'react';

import Checkbox from './Checkbox.jsx';
import ResultSpace from './ResultSpace.jsx';

import Store from '../stores/CheckboxStore.js';

function getCheckboxState() {
  return {
    checked: Store.getChecked(),
  };
}

export default React.createClass({
  getInitialState() {
    return getCheckboxState();
  }, 

  componentDidMount() {
    Store.addToggleListener(this._onChange);
  },

  componentWillUnmount() {
    Store.removeToggleListener(this._onChange);
  },

  render() {
    return (
      <div>
        <Checkbox checked={this.state.checked} />
        <ResultSpace checked={this.state.checked} />
      </div>
    );
  },

  _onChange() {
    this.setState(getCheckboxState());
  }
});
