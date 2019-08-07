import React, { Component } from 'react';
import axiosInstance from '../../axios';
import { connect } from 'react-redux';

import './Product.scss';

class Product extends Component {
    state = {
        clinicName: this.props.match.params.name,
        productData: [],
        addToCartData: []
    }

    componentDidMount() {
        const clinicId = this.props.match.params.id;
        axiosInstance.get('/jsondata/productlist.json')
            .then((response) => {
                const arr = response.data.data.filter((product) => {
                    return clinicId === product.clinicId
                })
                this.setState({ productData: arr });
            });
    }

    render() {
        return (
            <div className="mcprodcont">
                <div className="mcsearresult">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h5 className="mcsearchheader">{this.state.clinicName}</h5>
                                <div className="mcproditemlist">
                                    <div className="row">
                                        {this.state.productData.length ? (
                                            this.state.productData.map((item, index) => {
                                                return (
                                                    <div className="col-xl-4 col-md-6 mcproduct" key={index}>
                                                        <div className="mcproditem">
                                                            <a href="javascript:void(0)">
                                                                <div className="mcprodimg">
                                                                    <img src={require("../../assets/images/product1.jpg")} alt="" />
                                                                </div>
                                                            </a>
                                                            <div className="mcprodinfo">
                                                                <a href="javascript:void(0)">
                                                                    <h5>{item.name}</h5>
                                                                </a>
                                                                <p>{item.description}</p>
                                                                <div className="row align-items-center">
                                                                    <div className="col-sm-6 mcitemprice">
                                                                        <h4>Rs. {item.price}</h4>
                                                                    </div>
                                                                    <div className="col-sm-6 text-right mcitemcart">
                                                                        <button className="btn mccartlink" onClick={() => this.props.onUpdateCart(item)}>Add to cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.addToCartData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateCart: (item) => dispatch({ type: 'ADD', payload: item })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);