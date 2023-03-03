import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProduct';
import { CartContext } from './CartContext';
import { useEffect, useState } from 'react';

const App = () => {
   const [cart, setCart] = useState({});

   // Fetch cart from local storage
   useEffect(() => {
      const cart = window.localStorage.getItem('cartKey');
      setCart(JSON.parse(cart));
   }, []);

   // Set items to local storage after cart is updated
   useEffect(() => {
      window.localStorage.setItem('cartKey', JSON.stringify(cart));
   }, [cart]);

   return (
      <>
         <Router>
            <CartContext.Provider value={{ cart, setCart }}>
               <Header />

               <Routes>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/products' element={<Products />}></Route>
                  <Route
                     path='/products/:_id'
                     element={<SingleProduct />}
                  ></Route>
                  <Route path='/cart' element={<Cart />}></Route>
               </Routes>
            </CartContext.Provider>
         </Router>
      </>
   );
};

export default App;
