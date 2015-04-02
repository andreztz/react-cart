'use strict';

var React = require('react');
var ProductItem = require('./ProductItem.react');
var ProductStore = require('../stores/ProductStore');

function getStateFromStores() {
  return {
    'products': ProductStore.getAll()
  };
}

function getProductItem(product, index) {
  return (
    <ProductItem
      product={product} key={index}
    />
  );
}

var ProductSection = React.createClass({

  getInitialState: () => getStateFromStores(),

  componentDidMount: function() {
    ProductStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var products = this.state.products.map(getProductItem, this);
    return (
      <section className="content">
        <div className="product-grid cbp-vm-view-grid">
          <ul>
            {products}
          </ul>
        </div>
      </section>
    );
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = ProductSection;
