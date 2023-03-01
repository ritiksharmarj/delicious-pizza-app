import { Link } from 'react-router-dom';

const Navigation = () => {
   const cartIconStyle = {
      backgroundColor: '#F59E0D',
      display: 'flex',
      padding: '6px 12px',
      borderRadius: '50px',
   };

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
                     <div style={cartIconStyle}>
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
