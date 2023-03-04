import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

const Header = () => {
   const { cart } = useContext(CartContext);

   return (
      <>
         <nav className='container mx-auto flex items-center justify-between py-4'>
            <Link to='/'>
               <img style={{ height: 45 }} src='/images/logo.png' alt='logo' />
            </Link>

            <ul className='flex items-center gap-x-6 font-bold'>
               <li>
                  <Link to='/'>Home</Link>
               </li>
               <li>
                  <Link to='/products'>Products</Link>
               </li>
               <li>
                  <Link to='/cart'>
                     <div className='bg-yellow-500 flex gap-2 py-2 px-4 font-bold rounded-full'>
                        {/* <span>{cart.totalItems ? cart.totalItems : 0}</span> */}
                        {cart.totalItems ? <span>{cart.totalItems}</span> : ''}
                        <img src='/images/cart.png' alt='cart-icon' />
                     </div>
                  </Link>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default Header;
