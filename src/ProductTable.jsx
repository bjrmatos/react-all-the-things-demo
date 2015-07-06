'use strict';

var React = require('react'),
    ProductCategoryRow = require('./ProductCategoryRow.jsx'),
    ProductRow = require('./ProductRow.jsx');

var ProductTable = React.createClass({
  render: function() {
    var rows = [],
        lastCategory = null;

    this.props.products.forEach(function(product) {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow category={product.category} key={product.category} />
        );
      }

      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </table>
    );
  }
});

module.exports = ProductTable;