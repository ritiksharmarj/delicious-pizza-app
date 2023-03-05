import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { MdOutlineShoppingCart, MdShoppingCart } from 'react-icons/md';

const Header = () => {
   const { cart } = useContext(CartContext);

   return (
      <>
         <nav className='container mx-auto w-full flex items-center justify-between py-4 px-4 md:px-0'>
            <Link to='/'>
               <img className='h-12' src='/images/logo.png' alt='logo' />
            </Link>

            <ul className='flex items-center gap-x-6 font-bold'>
               <li className='md:list-item hidden'>
                  <Link to='/'>Home</Link>
               </li>
               <li>
                  <Link to='/products'>Products</Link>
               </li>
               <li>
                  <Link to='/cart'>
                     <div className='bg-yellow-500 flex items-center md:leading-normal leading-none gap-2 py-2 px-4 font-bold rounded-full'>
                        {cart.totalItems ? <span>{cart.totalItems}</span> : ''}
                        {cart.totalItems ? (
                           <MdShoppingCart className='md:w-6 w-4 md:h-6 h-4' />
                        ) : (
                           <MdOutlineShoppingCart className='md:w-6 w-4 md:h-6 h-4' />
                        )}
                     </div>
                  </Link>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default Header;
