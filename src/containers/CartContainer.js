import React, { Component } from 'react';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';
import { connect } from 'react-redux';
import { ActDeleteCart,ActChangeMessage,ActUpdateCart } from './../actions/index';
class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    return (
      <Cart>
          { this.showCartItem(cart) }
          { this.showTotalMount(cart) }
      </Cart>
    );
  }

  showCartItem = cart => {
      var { onDeleteCart,changeMessage,onUpdateCart } = this.props;
      var result = <tr>
        <td>{ Message.MSG_NOMARL_CART }</td>
      </tr>;
      if(cart.length > 0) {
          result = cart.map((item,index) => {
              return (
                <CartItem 
                  key={index} 
                  item={item} 
                  index={index} 
                  onDeleteCart={onDeleteCart}
                  changeMessage={changeMessage}
                  onUpdateCart={onUpdateCart}
                ></CartItem>
              );
          });
      }
      return result;
  }

  showTotalMount = cart => {
      var result = null;
      if(cart.length > 0) {
          return <CartResult cart={cart}/>
      }
      return result;
  }
}

const mapStateToProps = state => {
  return {
    cart : state.cart
  }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onDeleteCart : (product) => {
            dispatch(ActDeleteCart(product));
        },
        changeMessage : (message) => {
            dispatch(ActChangeMessage(message));
        },
        onUpdateCart : (product,quantity) => {
            dispatch(ActUpdateCart(product,quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);