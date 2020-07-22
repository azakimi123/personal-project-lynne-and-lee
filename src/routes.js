import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Shop from './Components/Shop/Shop';
import Product from './Components/Product/Product';
import About from './Components/About/About';
import Auth from './Components/Auth/Auth';
import Contact from './Components/Contact/Contact';
import ShopManager from './Components/ShopManager/ShopManager';
import ShopStats from './Components/ShopStats/ShopStats';
import ProductEdit from './Components/ProductEdit/ProductEdit';
import Checkout from './Components/Checkout/Checkout';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/shop' component={Shop} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/cart' component={Checkout} />
        <Route path='/signin' component={Auth} />
        <Route path='/product/:productId' component={Product} />
        <Route path='/shop/manager' component={ShopManager} />
        <Route path='/stats' component={ShopStats} />
        <Route path='/edit/:productId' component={ProductEdit} />
    </Switch>
)