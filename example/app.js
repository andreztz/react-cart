/**
 * Main entry point for CartApp
 */

'use strict';

var React = require('react');
var ShoppingCart = require('react-cart');
require('./assets/css/demo.css');


React.render(
  <ShoppingCart />,
  document.getElementById('react')
);
