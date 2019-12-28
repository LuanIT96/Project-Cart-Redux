import * as Types from './../constants/ActionTypes';

export const ActAddToCart = (product,quantity) => {
    return {
        type : Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const ActChangeMessage = (message) => {
    return {
        type : Types.CHANGE_MESSAGE,
        message
    }
}

export const ActDeleteCart = (product) => {
    return {
        type : Types.DELETE_CART,
        product
    }
}

export const ActUpdateCart = (product,quantity) => {
    return {
        type : Types.UPDATE_CART,
        product,
        quantity
    }
}