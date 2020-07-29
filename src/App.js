import React, {Component} from 'react';
// import About from './Components/About/About';
// import Auth from './Components/Auth/Auth';
// import Chart1 from './Components/Chart1/Chart1'
// import Chart2 from './Components/Chart2/Chart2';
// import Checkout from './Components/Checkout/Checkout';
// import CheckoutDisplay from './Components/CheckoutDisplay/CheckoutDisplay';
// import Contact from './Components/Contact/Contact';
// import Landing from './Components/Landing/Landing';
import Nav from './Components/Nav/Nav';
// import Product from './Components/Product/Product';
// import ProductEdit from './Components/ProductEdit/ProductEdit';
// import Shop from './Components/Shop/Shop';
// import ShopManager from './Components/ShopManager/ShopManager';
// import ShopStats from './Components/ShopStats/ShopStats';
import Footer from './Components/Footer/Footer';
import routes from './routes';
import './App.scss';

class App extends Component {
  render(){
    return(
      <div className='app-container'>
        <Nav/>
        {routes}
        <Footer/>
      </div>
    )
  }
}

export default App;