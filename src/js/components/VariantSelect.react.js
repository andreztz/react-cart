var React = require('react');
var ProductActionCreators = require('../actions/ProductActionCreators');
var ReactPropTypes = React.PropTypes;


var VariantSelect = React.createClass({

  propTypes: {
    variants: React.PropTypes.array.isRequired,
    id: React.PropTypes.number.isRequired
  },

  render: function() {
    var options = this.props.variants.map(function(variant, index) {
      return <option key={index} value={index}>{variant.type} ${variant.price.toFixed(2)}</option>;
    });
    return (
      <select className="cbp-vm-variant" onChange={this._setProductVariant}>
        {options}
      </select>
    );
  },

  _setProductVariant: function(e) {
    var productId = this.props.id;
    var variantIndex = Number(e.target.value);
    ProductActionCreators.setProductVariant({productId, variantIndex});
  }

});

module.exports = VariantSelect;
