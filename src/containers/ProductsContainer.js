import React, { Component } from 'react';
import Products from './../components/Products';
import Product from './../components/Product';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
class ProductsContainer extends Component {
  render() {
    var { products } = this.props;
    return (
      <Products>
          {this.showProduct(products)}
      </Products>
    );
  }

  showProduct(products) {
    var result = null;
    var { onAddToCart,onChangeMessage } = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product 
                key={index} 
                product={product} 
                onAddToCart = { onAddToCart }
                onChangeMessage = { onChangeMessage }
              />
      });
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart : (product) => {
            dispatch(actions.ActAddToCart(product ,1));
        },
        onChangeMessage : (message) => {
            dispatch(actions.ActChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);