import React, { Component } from 'react';
import * as Message from './../constants/Message';
class CartItem extends Component {
  render() {
    let link = "#";
    var { item } = this.props;
    var { quantity } = item;
    return (
        <tr>
        <th scope="row">
            <img src={item.product.image}
                alt={item.product.name} className="img-fluid z-depth-0" />
        </th>
        <td>
            <h5>
                <strong>{item.product.name}</strong>
            </h5>
        </td>
            <td>{item.product.price}$</td>
        <td className="center-on-small-only">
            <span className="qty">{quantity} </span>
            <div className="btn-group radio-group" data-toggle="buttons">
                <label 
                    className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light"
                    onClick={ () => this.UpdateToCart(item.product,item.quantity - 1) }
                >
                <a href={ link }>—</a>
                </label>
                <label 
                    className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light"
                    onClick={ () => this.UpdateToCart(item.product,item.quantity + 1) }
                >
                <a href={ link }>+</a>
                </label>
            </div>
        </td>
        <td>{this.onTotalMount(item.product.price, item.quantity)}$</td>
        <td>
            <button 
                type="button" 
                className="btn btn-sm btn-primary waves-effect waves-light" 
                data-toggle="tooltip" 
                data-placement="top"
                title="" 
                data-original-title="Remove item"
                onClick = { () => this.deleteToCart(item.product) }
            >
                X
            </button>
        </td>
        </tr>
    );
  }

  onTotalMount = (price,quantity) => {
        return price * quantity;
  }

  deleteToCart = (product) => {
        this.props.onDeleteCart(product);
        this.props.changeMessage(Message.MSG_DELETE_TO_CART);
  }

  UpdateToCart = (product , quantity) => {
       if(quantity > 0) {
           this.props.onUpdateCart(product,quantity);
           this.props.changeMessage(Message.MSG_UPDATE_TO_CART);
       } else {
            this.props.changeMessage(Message.MSG_ERROR);
       }
  }
}

export default CartItem;