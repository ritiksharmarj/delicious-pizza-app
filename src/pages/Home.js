import Products from '../components/Products';
import { Link } from 'react-router-dom';

const Home = () => {
   return (
      <>
         <div className='Hero py-16'>
            <div className='container mx-auto flex items-center px-4 md:px-0'>
               <div className='md:w-1/2 w-full'>
                  <h6 className='text-xl italic'>Itni fast delivery by GOD!</h6>
                  <h1 className='text-6xl italic font-bold mb-8 mt-3'>
                     19 Minute Delivery
                  </h1>
                  <Link to='/products'>
                     <button className='px-6 py-2 rounded-full leading-none md:leading-normal font-bold bg-yellow-500 hover:bg-yellow-600 transition duration-300'>
                        Try Delicious Pizza
                     </button>
                  </Link>
               </div>
               <div className='md:block hidden w-1/2'>
                  <img className='w-full' src='/images/pizza.png' alt='pizza' />
               </div>
            </div>
         </div>

         <div className='pb-16'>
            <Products />
         </div>
      </>
   );
};

export default Home;
