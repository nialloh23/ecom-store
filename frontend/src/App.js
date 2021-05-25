import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from './screens/UserListScreen'
import ProductListScreen from './screens/ProductListScreen'
import OrderListScreen from './screens/OrderListScreen'
import ProductEditScreen from "./screens/productEditScreen";
import UserEditScreen from "./screens/userEditScreen";

import React from 'react'
import { Route, HashRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
          <Container>
              <Route path='/' component={HomeScreen} exact />
              <Route path='/login' component={LoginScreen}/>
              <Route path='/register' component={RegisterScreen}/>
              <Route path='/profile' component={ProfileScreen}/>
              <Route path='/shipping' component={ShippingScreen}/>
              <Route path='/payment' component={PaymentScreen}/>
              <Route path='/placeorder' component={PlaceOrderScreen}/>
              <Route path='/order/:id' component={OrderScreen}/>
              <Route path='/product/:id' component={ProductScreen}/>
              <Route path='/cart/:id?' component={CartScreen}/>
              <Route path='/admin/userList' component={UserListScreen} />
              <Route path='/admin/productList' component={ProductListScreen} />
              <Route path='/admin/orderList' component={OrderListScreen} />
              <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
              <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;