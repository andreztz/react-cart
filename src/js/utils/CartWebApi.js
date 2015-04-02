/**
 * Mock API using localStorage
 */

'use strict';

var CartServerActionCreators = require('./CartServerActionCreators');

module.exports = {
  /**
   * Simulate retreiving data from an database
   */
  getAllProducts: function() {
    // Fetch
    var products = JSON.parse(localStorage.getItem('products'));
    // Simulated callback
    CartServerActionCreators.receiveAll(products);
  }
};
