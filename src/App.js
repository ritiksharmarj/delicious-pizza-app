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

   // Update initial cart value
   useEffect(() => {
      window.localStorage.setItem('cart', JSON.stringify(cart));
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
