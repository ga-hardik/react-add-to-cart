import React, { Component } from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { BrowserRouter } from 'react-router-dom'

import Header from './shared/header/Header';
import Footer from './shared/footer/Footer';
import RouterComponent from './routers/router';
const store = createStore(reducer);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: []
    }

    store.subscribe(() => {
      this.setState({
        item: store.getState()
      });
    });
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header cartData={this.state.item} />
          <RouterComponent />
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
