export const addItemToCart = (cartItems, cartAddItem) => {
    const existingCartItem = cartItem.find(
        (cartItem) => cartItem.id === cartAddItem.id
    )

    if (existingCartItem) {
        return cartItems.map((cartItems) =>
        cartItems.id === cartAddItem.id
        ?{...cartItem, quantity: cartItem + 1}
        : cartItem
        )
    }

    return [...cartItems,{...cartAddItem, quantity: 1}]
}

export const addRemoveFromCart = (cartItems,cartAddItem) => {
    const existingCartItem = cartItem.find(
        (cartItem) => cartItem.id === cartAddItem.id
    )
    if (existingCartItem.quantity=== 1){
        return cartItems.filter(cartItem=>cartItem.id!== cartAddItem.id)
    }
    return cartItems.map((cartItem) =>
    cartItem.id === cartAddItem.id
    ? {...cartItem,quantity:cartItem -1}
    : cartItem
    )
}