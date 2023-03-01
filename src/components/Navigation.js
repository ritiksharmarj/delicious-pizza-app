import { Link } from 'react-router-dom';

const Navigation = () => {
   return (
      <>
         <nav className='container mx-auto flex items-center justify-between py-4'>
            <Link to='/'>
               <img style={{ height: 45 }} src='/images/logo.png' alt='logo' />
            </Link>

            <ul className='flex items-center gap-x-6'>
               <li>
                  <Link to='/'>Home</Link>
               </li>
               <li>
                  <Link to='/products'>Products</Link>
               </li>
               <li>
                  <Link to='/cart'>
                     <div className='bg-yellow-500 flex py-2 px-4 rounded-full'>
                        <span>10</span>
                        <img
                           className='ml-2'
                           src='/images/cart.png'
                           alt='cart-icon'
                        />
                     </div>
                  </Link>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default Navigation;
