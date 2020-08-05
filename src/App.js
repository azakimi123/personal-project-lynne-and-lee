import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
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
import Header1 from './Components/Nav/Header1';
import Footer from './Components/Footer/Footer';
import routes from './routes';
import './App.scss';
import { AuthContext } from './Components/Auth/CreateContext';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      isAdmin: false,
      username: '',
      user_email: '',
      user_password: ''
    }
  }

  // componentDidMount = () => {
  //   console.log(`App.js mounted`)
  //   this.setState=({
  //     loggedIn: localStorage.loggedIn
  //   })
  // }

  handleLoggedIn = (value) => {
    this.setState({loggedIn: value})
  }

  handleIsAdmin = (value) => {
    this.setState({isAdmin: value})
  }
  

  render(){

    // console.log(this.state.loggedIn)
    return(
      <div className='app-container'>
        <AuthContext.Provider value={
          {
          loggedIn: this.state.loggedIn,
          isAdmin: this.state.isAdmin,
          adminFn: this.handleIsAdmin, 
          loginFn: this.handleLoggedIn
          }
          }>
          <Nav/>
          {routes}
          <Footer/>
        </AuthContext.Provider>
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(App);




// componentDidMount = () => {
//   if(this.props.userReducer.loggedIn) {
//       axios.get('/api/getUser')
//       .then(res => {
//       console.log(`user info`)
//       this.setState({
//         username: res.data[0].username,
//         user_email: res.data[0].user_email,
//         user_password: res.data[0].user_password
//       })
//           })
//           .catch(err => console.log(err))
//   }
// }