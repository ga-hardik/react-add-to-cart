const redux = require('redux');
const createStore = redux.createStore;

const initialSatet = {
    addToCartData: []
}

//Reducer
const rootReducer = (state = initialSatet, action) => {
    if (action.type === 'CART_DATA') {
        return {
            ...state,
            addToCartData: state.addToCartData
        }
    }
    if (action.type === 'UPDATED_CART') {
        return {
            ...state,
            addToCartData: state.addToCartData.push(action.value)
        }
    }
    return state;
}

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(() => {
    console.log('subscription', store.getState());
});

//Dispatching Action
store.dispatch({ type: 'CART_DATA' });
store.dispatch({ type: 'UPDATED_CART', value: 10 });
console.log(store.getState());