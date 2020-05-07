import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Primary from './Primary';
import Secondary from './Secondary';
import RestaurantApp from './RestaurantApp';
import { Route, BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie'
import Login from './components/Login/Login';


const routing = (
    <BrowserRouter>
        <CookiesProvider>
            {/* <Route exact path="/react-view" component={Login}/> */}
            <Route exact path="/react-view" component={RestaurantApp}/>
        </CookiesProvider>
    </BrowserRouter>
)


ReactDOM.render(routing, document.getElementById('name'));
