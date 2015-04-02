'use strict';

var Dispatcher = require('../dispatcher/CartDispatcher');
var CartConstants = require('../constants/CartConstants');

var ActionTypes = CartConstants;

var CartActions = {

  addToCart: function(product) {
    Dispatcher.dispatch({
      type: ActionTypes.ADD_PRODUCT_TO_CART,
      product: product
    });
  },

  setQty: function(qty, sku) {
    Dispatcher.dispatch({
      type: ActionTypes.SET_QTY,
      qty: qty,
      sku: sku
    });
  },

  remove: function(sku) {
    Dispatcher.dispatch({
      type: ActionTypes.REMOVE_CART_ITEM,
      sku: sku
    });
  },

  toggleCart: function(isOpen) {
    Dispatcher.dispatch({
      type: ActionTypes.TOGGLE_CART
    });
  }

};

module.exports = CartActions;
