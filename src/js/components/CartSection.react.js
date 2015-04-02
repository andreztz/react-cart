'use strict';

var React = require('react');
var classNames = require('classnames');
var ReactPropTypes = React.PropTypes;
var CartItem = require('./CartItem.react');
var CartStore = require('../stores/CartStore');
var CartActionCreators = require('../actions/CartActionCreators');

function getStateFromStores() {
  return {
    cartItems: CartStore.getAll(),
    cartItemsCount: CartStore.getCartItemsCount(),
    cartTotal: CartStore.getCartTotal(),
    isOpen: CartStore.getCartStatus()
  };
}
var CartSection = React.createClass({

  propTypes: {
    cartItems: React.PropTypes.array,
    cartItemsCount: React.PropTypes.number,
    cartTotal: React.PropTypes.number,
    isOpen: React.PropTypes.bool
  },

  getInitialState: () => getStateFromStores(),

  componentDidMount: function() {
    CartStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    CartStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var cartItems = this.state.cartItems.map(
      (cartItem, index) =>
      <CartItem cartItem={cartItem} key={index} />
    );

    return (
      <div className="checkout-fixed">
        <div className="checkout__icon" onClick={this._toggleCart}>
          <i className="icon fa fa-fw fa-shopping-cart"></i>
        </div>
        <div
          className={classNames({
            'js-checkout--active': this.state.isOpen,
            'checkout': true
          })}
        >
          <a className="checkout__button" onClick={this._toggleCart} href="#">
            <span className="checkout__text">
              <span className="checkout__text-inner checkout__initial-text">Checkout</span>
              <span className="checkout__text-inner checkout__final-text">
                ${this.state.cartTotal.toFixed(2)}
                <i className="fa fa-fw fa-shopping-cart"></i>
              </span>
            </span>
          </a>
          <div className="checkout__order">
            <div className="checkout__order-inner">
              <table className="checkout__summary">
                <thead>
                      <tr><th>Item</th><th>QTY</th><th>Price</th><th>&nbsp;</th></tr>
                  </thead>
                  <tbody>
                    {cartItems}
                  </tbody>
                </table>
                <button
                  className="checkout__close checkout__cancel"
                  onClick={this._toggleCart}
                >
                  <i className="icon fa fa-fw fa-close"></i>
                  Close
                </button>
              </div>
            </div>
          </div>
          <div
            className="checkout__count"
            onClick={this._toggleCart}
          >
            {this.state.cartItemsCount}
          </div>
        </div>
    );
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  },

  _toggleCart: function (e) {
    e.preventDefault();
    CartActionCreators.toggleCart();
  }

});

module.exports = CartSection;
