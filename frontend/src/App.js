import React, { useEffect, useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import PrivateRoute from './components/PrivateRoute';
import ProductEditScreen from './screens/ProductEditScreen';
import UserListScreen from './screens/UserListScreen';
import AdminRoute from './components/AdminRoute';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import OrderListScreen from './screens/OrderListScreen';
import SellerRoute from './screens/SellerRoute';
import SellerScreen from './screens/SellerScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import { listProductCategories } from './actions/productActions';
import LoadingBox from './components/LoadingBox';
import MessageBox from './components/MessageBox';
import MapScreen from './screens/MapScreen';
import DashboardScreen from './screens/DashboardScreen';



function App() {
  // const cart = useSelector((state) => state.cart);
  // const { cartItems } = cart;
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
        <button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
              <i className="fa fa-bars"></i>
            </button>
          <Link className="brand" to="/">
            amazona
          </Link>
        </div>
        <div>
        {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist/seller">Orders</Link>
                  </li>
                </ul>
              </div>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                  <li>
                    <Link to="/support">Support</Link>
                  </li>
                </ul>
              </div>
            )}
        </div>
        </header>
        <aside className={sidebarIsOpen ? 'open' : ''}>
          <ul className="categories">
            <li>
              <strong>Categories</strong>
              <button
                onClick={() => setSidebarIsOpen(false)}
                className="close-sidebar"
                type="button"
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
            {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              categories.map((c) => (
                <li key={c}>
                  <Link
                    to={`/search/category/${c}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    {c}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </aside>
        <main>
        <Routes>
        <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
          <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
         <Route path="/cart/:id?" element={<CartScreen/>}></Route>
          <Route path="/product/:id" element={<ProductScreen/>} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/" element={<HomeScreen/>} exact></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
           <Route path="/payment" component={PaymentMethodScreen}></Route>
           <Route path="/placeorder" component={PlaceOrderScreen}></Route>
           <Route path="/order/:id" component={OrderScreen}></Route>
           <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
           <Route path="/seller/:id" component={SellerScreen}></Route>
           <PrivateRoute path="/map" component={MapScreen}></PrivateRoute>
           
           <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
           <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
            component={SearchScreen}
            exact
          ></Route>
          <AdminRoute
            path="/productlist/pageNumber/:pageNumber"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/dashboard"
            component={DashboardScreen}
            exact
          ></AdminRoute>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
           <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
            <AdminRoute
            path="/support"
            component={SupportScreen}
          ></AdminRoute>
           <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
           <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
           <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
           <SellerRoute
            path="/productlist/seller"
            component={ProductListScreen}
            exact
          ></SellerRoute>
          <SellerRoute
            path="/orderlist/seller"
            component={OrderListScreen}
          ></SellerRoute>
      </Routes>
      </main>
      <footer className="row center">
      {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo}/>}
      <div> All right reserved</div>
      
     </footer>
    </div>
   </BrowserRouter>
  );
}

export default App;