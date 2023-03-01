import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Navigation from './components/Navigation';

const App = () => {
   return (
      <>
         <Router>
            <Navigation />

            <Routes>
               <Route path='/' element={<Home />}></Route>
               <Route path='/products' element={<Products />}></Route>
               <Route path='/cart' element={<Cart />}></Route>
            </Routes>
         </Router>
      </>
   );
};

export default App;
