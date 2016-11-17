const React = require('react');

class Product extends React.Component {
  render() {
    let watermark = this.props.hasWatermark ? "Watermarked" : "not"
    return (
      <div className='product'>
        <p>Name: ${this.props.name}</p>
        <p>Producer: ${this.props.producer}</p>
        <p>Watermark: ${watermark}</p>
        <p>Color: ${this.props.color}</p>
        <p>Weight: ${this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    let weight = props[propName];
    if (weight === undefined) {
      return new Error('weight is undefined')
    }
    if (isNaN(weight)) {
      return new Error('weight is not a number')
    }
    if (weight <= 80 || weight >= 300) {
      return new Error(propName + ' in ' + componentName + " is not between 80 and 300.");
    }
  }
}

module.exports = Product;
