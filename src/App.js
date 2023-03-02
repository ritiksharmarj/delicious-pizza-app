import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Header from './components/Header';

const App = () => {
   return (
      <>
         <Router>
            <Header />

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
