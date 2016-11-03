import React from 'react';

export default React.createClass({
  render() {
    return (
      <p>{String(this.props.checked)}</p>
    );
  }
});
