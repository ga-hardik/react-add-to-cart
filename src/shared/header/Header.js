import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

import './Header.scss';
import logo from '../../assets/images/logo.png';

const header = (props) => {
    return (
        <header className="addtocarthdr">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-5">
                        <a href="true" className="addtocartlogo">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <div className="col-7 text-right">
                        <ul className="nav justify-content-end mcmenulist">
                            <li className="nav-ite">
                                <Link to='/cart'>
                                    <button className="btn" >
                                        <FontAwesomeIcon className="fontAwesome" icon={faShoppingCart} />
                                        {props.cartData.addToCartData ?
                                            <span className="badge badge-danger">{props.cartData.addToCartData.length}</span>
                                            : <span className="badge badge-danger">0</span>}
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default header;