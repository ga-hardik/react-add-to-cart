import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Clinic from '../components/clinic/Clinic';
import Product from '../components/product/Product';
import Cart from '../components/cart/Cart';

export class RouterComponent extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Clinic} />
                <Route path="/product/:id/:name" exact component={Product} />
                <Route path="/cart" exact component={Cart} />
            </Switch>
        )
    }
}

export default RouterComponent;