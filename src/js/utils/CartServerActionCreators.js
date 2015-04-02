/**
 * Responds to actions triggered by mock API
 */

'use strict';

var Dispatcher = require('../dispatcher/CartDispatcher');
var CartConstants = require('../constants/CartConstants');

module.exports = {
  receiveAll: function(products) {
    Dispatcher.dispatch({
      type: CartConstants.RECEIVE_ALL_PRODUCTS,
      products: products
    });
  }
};
