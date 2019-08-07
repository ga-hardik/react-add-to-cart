const initialState = {
    addToCartData: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD') {
        const cartData = state.addToCartData;
        cartData.push(action.payload);
        return {
            addToCartData: getUnique(cartData)
        }
    }
    if (action.type === 'DELETE') {
        return {
            addToCartData: state.addToCartData.filter((_, i) => i !== action.payload)
        }
    }
    return state;
}

const getUnique = (array) => {
    let uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

export default reducer;