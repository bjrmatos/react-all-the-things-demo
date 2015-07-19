'use strict';

var React = require('react');

var ProductCategoryRow = React.createClass({
  propTypes: {
    category: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
});

module.exports = ProductCategoryRow;