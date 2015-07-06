'use strict';

var React = require('react'),
    FilterableProductTable = require('./FilterableProductTable.jsx');

var PRODUCTS = [
  { category: 'Sporting Goods', price: 'S/.49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: 'S/.9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: 'S/.29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: 'S/.4999.99', stocked: true, name: 'TV 50" - Tottus' },
  { category: 'Electronics', price: 'S/.99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: 'S/.399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: 'S/.199.99', stocked: true, name: 'Nexus 7' }
];

React.render(<FilterableProductTable products={PRODUCTS} />, document.getElementById('app'));
