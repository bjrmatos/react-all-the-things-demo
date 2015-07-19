'use strict';

var React = require('react'),
    SearchBar = require('./SearchBar.jsx'),
    ProductTable = require('./ProductTable.jsx');

var FilterableProductTable = React.createClass({
  getInitialState: function() {
    return { inStockOnly: false };
  },
  handleUserInput: function(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    });
  },
  render: function() {
    return (
      <div>
        <SearchBar
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          products={this.props.products}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
});

module.exports = FilterableProductTable;