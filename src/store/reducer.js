const initialState = {
    addToCartData: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'UPDATED') {
        return {
            addToCartData: action.payload
        }
    }
    if (action.type === 'DELETE') {
        return {
            addToCartData: state.addToCartData.filter((_, i) => i !== action.payload)
        }
    }
    return state;
}

export default reducer;