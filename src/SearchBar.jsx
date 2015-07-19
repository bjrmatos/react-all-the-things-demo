'use strict';

var React = require('react');

var SearchBar = React.createClass({
  handleChange: function(ev) {
    this.props.onUserInput(
      ev.target.checked
    );
  },
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Search..." />

        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleChange}
          />
          {' '}
          Mostrar productos en stock
        </p>
      </form>
    );
  }
});

module.exports = SearchBar;