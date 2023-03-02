import Products from '../components/Products';

const Home = () => {
   return (
      <>
         <div className='Hero py-16'>
            <div className='container mx-auto flex items-center'>
               <div className='w-1/2'>
                  <h6 className='text-xl'>
                     <em>Itni fast delivery by GOD!</em>
                  </h6>
                  <h1 className='text-6xl md:text-4xl font-bold mb-6 mt-3'>
                     19 Minute Delivery
                  </h1>
                  <button className='px-6 py-2 rounded-full text-white font-bold bg-yellow-500 hover:bg-yellow-600 transition duration-300'>
                     Try Delicious Pizza
                  </button>
               </div>
               <div className='w-1/2'>
                  <img className='w-full' src='/images/pizza.png' alt='pizza' />
               </div>
            </div>
         </div>

         <div className='py-16'>
            <Products />
         </div>
      </>
   );
};

export default Home;
