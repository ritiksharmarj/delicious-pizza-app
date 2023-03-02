import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProduct';

const App = () => {
   return (
      <>
         <Router>
            <Header />

            <Routes>
               <Route path='/' element={<Home />}></Route>
               <Route path='/products' element={<Products />}></Route>
               <Route path='/products/:_id' element={<SingleProduct />}></Route>
               <Route path='/cart' element={<Cart />}></Route>
            </Routes>
         </Router>
      </>
   );
};

export default App;
