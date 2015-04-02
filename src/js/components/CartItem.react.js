'use strict';

var React = require('react');
var ReactPropTypes = React.PropTypes;
var CartActionCreators = require('../actions/CartActionCreators');
var ProductActionCreators = require('../actions/ProductActionCreators');
var _ = require('lodash');

var Cart = React.createClass({

  propTypes: {
    cartItem: React.PropTypes.object.isRequired
  },

  render: function() {
    var cartItem = this.props.cartItem;
    var options = _.times(cartItem.initialInventory, n =>
      <option key={n} value={n+1}>{n+1}</option>
    );

    return (
      <tr>
        <td>
          {cartItem.title} {cartItem.type}
        </td>
        <td>
          <select
            className="checkout__qty"
            value={cartItem.qty}
            onChange={this._setQty}
          >
            {options}
          </select>
        </td>
        <td>${(cartItem.price * cartItem.qty).toFixed(2)}</td>
        <td>
          <button
            className="checkout__action"
            onClick={this._onClickRemove}
          >
            <i className="icon fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    );
  },

  _setQty: function(e) {
    var qty = Number(e.target.value);
    var sku = this.props.cartItem.sku;
    var id = this.props.cartItem.id;
    var initialInventory = this.props.cartItem.initialInventory;
    CartActionCreators.setQty(qty, sku);
    ProductActionCreators.setInventory(id, initialInventory, qty);
  },

  _onClickRemove: function(e) {
    e.preventDefault();
    var id = this.props.cartItem.id;
    var initialInventory = this.props.cartItem.initialInventory;
    CartActionCreators.remove(this.props.cartItem.sku);
    ProductActionCreators.setInventory(id, initialInventory, null);
  }

});

module.exports = Cart;
