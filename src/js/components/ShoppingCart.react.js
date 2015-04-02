'use strict';

var React = require('react');
var ProductSection = require('./ProductSection.react');
var CartSection = require('./CartSection.react');
var productsExampleData = require('../utils/productsExampleData');
var CartWebApi = require('../utils/CartWebApi');
// window.React = React; // export for http://fb.me/react-devtools

// Add products to localStorage
productsExampleData.init();

// Retrieve products
CartWebApi.getAllProducts();

var ShoppingCartApp = React.createClass({

  render: function() {
    return (
      <div className="container">
        <ProductSection />
        <CartSection />
      </div>
    );
  }

});

module.exports = ShoppingCartApp;
