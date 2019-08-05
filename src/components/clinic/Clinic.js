import React, { Component } from 'react';
import axios from 'axios';

import './Clinic.scss';

class Clinic extends Component {
    state = {
        clinicData: [],
        productData: []
    }

    componentDidMount() {
        const ax = axios.create({
            baseURL: 'http://localhost:3000'
        })
        ax.get('jsondata/cliniclist.json')
            .then((response) => {
                this.setState({ clinicData: response.data.data });
            });
    }

    fetchClinicItem(item) {
        if (item.clinicId) {
            this.props.history.push(`/product/${item.clinicId}/${item.name}`);
        }
    }

    importAll(r) {
        return r.keys().map(r);
    }

    render() {
        return (
            <div className="mcprodcont">
                <div className="mcsearresult">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h5 className="mcsearchheader">Clinics</h5>
                                <div className="mcproditemlist">
                                    <div className="row">
                                        {this.state.clinicData.length ? (
                                            this.state.clinicData.map((item, index) => {
                                                return (
                                                    <div className="col-xl-3 col-md-6" style={style} key={index} onClick={() => this.fetchClinicItem(item)}>
                                                        <div className="mcproditem">
                                                            <a href="javascript:void(0)">
                                                                <div className="mcprodimg">
                                                                    <img src={require(`../../assets/images/${item.img}`)} alt="" />
                                                                </div>
                                                            </a>
                                                            <div className="mcprodinfo">
                                                                <a href="javascript:void(0)">
                                                                    <h5>{item.name}</h5>
                                                                </a>
                                                                <p>{item.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        ) : null}
                                    </div>
                                </div>
                                <h6 className="text-center mcsearchload">Load More</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    cursor: 'pointer'
};

export default Clinic;