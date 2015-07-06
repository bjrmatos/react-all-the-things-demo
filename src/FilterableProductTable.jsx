'use strict';

var React = require('react'),
    SearchBar = require('./SearchBar.jsx'),
    ProductTable = require('./ProductTable.jsx');

var FilterableProductTable = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
});

module.exports = FilterableProductTable;