import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Cart.scss';

class Cart extends Component {
    state = {
        cartItem: [],
        discount: 60,
        shippingCharges: 20
    }

    componentDidMount() {
        this.setState({
            cartItem: this.props.addToCartData
        });
    }

    getCartMRP() {
        if (this.state.cartItem.length) {
            let total = this.state.cartItem.reduce((sum, item) => {
                return parseFloat(item.price) + parseFloat(sum);
            }, 0);
            return total;
        } else {
            return 0;
        }
    }

    getTotalAmount() {
        return (this.getCartMRP() - this.state.discount + this.state.shippingCharges);
    }

    deleteItem(index) {
        let tmpArray = [...this.state.cartItem];
        tmpArray.splice(index, 1);
        this.setState({
            cartItem: tmpArray
        })
    }

    render() {
        return (
            <div className="mcprodcont">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12 text-center mcwizardsec">
                            <div className="mcwizardstep active">
                                <span className="mcwizardcircle mcwizcart"></span>
                                <h6>My Cart</h6>
                            </div>
                            <div className="mcwizardstep">
                                <span className="mcwizardcircle mcwizorder"></span>
                                <h6>Order Summary</h6>
                            </div>
                            <div className="mcwizardstep">
                                <span className="mcwizardcircle mcwizpayment"></span>
                                <h6>Payment</h6>
                            </div>
                        </div>

                        <div className="col-12 col-md-8 col-lg-9">
                            <div className="mcmycartlist">
                                <h5 className="mccarttitle">My Cart</h5>
                                {this.state.cartItem.length ? (
                                    this.state.cartItem.map((item, index) => {
                                        return (
                                            <div className="mcprodlistview clearfix" key={index}>
                                                <span className="mcitemcancel" onClick={() => { this.props.deleteItemFromReducer(index); this.deleteItem(index) }}></span>
                                                <div className="mcprodimg">
                                                    <img src={require("../../assets/images/product1.jpg")} alt="" />
                                                </div>
                                                <div className="mcprodinfo">
                                                    <h5>{item.name}</h5>
                                                    <p>{item.description}</p>
                                                    <div className="row align-items-center">
                                                        <div className="col-sm-6 mcitemrange">
                                                            {/* <span>Qty</span>
                                                            <input type="text" className="form-control" placeholder="" /> */}
                                                        </div>
                                                        <div className="col-sm-6 text-right mcitemprice">
                                                            <h4>Rs. {item.price}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })
                                ) : null}
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="mcsumlist">
                                <h5>Summary</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <div className="row">
                                            <div className="col-6 mcsuml">
                                                <p>MRP Total</p>
                                            </div>
                                            <div className="col-6 mcsumr text-right">
                                                <p>
                                                    {this.getCartMRP()}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div className="col-6 mcsuml">
                                                <p>Price Discount</p>
                                            </div>
                                            <div className="col-6 mcsumr text-right">
                                                <p>- Rs. {this.state.discount}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div className="col-6 mcsuml">
                                                <p>Shipping Charges</p>
                                            </div>
                                            <div className="col-6 mcsumr mcshippingno text-right">
                                                <p>Rs. {this.state.shippingCharges}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div className="col-6 mcsuml">
                                                <p>Total</p>
                                            </div>
                                            <div className="col-6 mcsumr mctotalno text-right">
                                                <p>Rs. {this.getTotalAmount()}</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <button className="btn mcbtncheckout">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        addToCartData: state.addToCartData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteItemFromReducer: (index) => dispatch({ type: 'DELETE', payload: index })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);