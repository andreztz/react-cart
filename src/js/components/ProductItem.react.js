'use strict';

var React = require('react');
var ReactPropTypes = React.PropTypes;
var ProductActionCreators = require('../actions/ProductActionCreators');
var CartActionCreators = require('../actions/CartActionCreators');
var ProductStore = require('../stores/ProductStore');
var VariantSelect = require('./VariantSelect.react');
var _ = require('lodash');

var ProductItem = React.createClass({

  propTypes: {
    product: React.PropTypes.object.isRequired
  },

  render: function() {
    var product = this.props.product;
    var variantIndex, i = product.variantIndex;
    var variants = product.variants;
    var inventory = variants[i].inventory;
    var price = variants[i].price.toFixed(2);
    var variantProps = {
      variants: variants,
      id: product.id
    };
    return (
        <li className="product-grid__item">
          <img src={"/assets/images/"+product.image} />
          <h3 className="cbp-vm-title">
            {product.title}
          </h3>
          <div className="cbp-vm-price">
            ${price}
          </div>
          <div className="cbp-vm-details">
            {product.description}
          </div>
          <div className="cbp-vm-variants">
              {(_.size(variants) > 1) ?
              <VariantSelect {...variantProps} /> :
              product.variants[i].type + ' $' + price}
          </div>
          <button
            className="cbp-vm-icon cbp-vm-add"
            onClick={this._addToCart}
            disabled={inventory === 0}
          >
            {inventory > 0 ? 'Add to cart' : 'Sold Out!'}
          </button>
        </li>
    );
  },

  _addToCart: function(e) {
    e.preventDefault();
    var product = this.props.product;
    CartActionCreators.addToCart(product);
    ProductActionCreators.removeOneFromInventory(product);
  }

});

module.exports = ProductItem;
