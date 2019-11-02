import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './component/navbar'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route} from 'react-router-dom';
import Welcome from './component/Welcome';
import Footer from './component/footer'

ReactDOM.render(
    <BrowserRouter>
        <Navbar />
        <Route path="/" component={Welcome} />
        <Footer />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
