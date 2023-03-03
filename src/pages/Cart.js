import { useContext, useEffect } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
   const { cart } = useContext(CartContext);

   // useEffect(() => {
   //    // If there is no item in the cart, return nothing
   //    if (!cart.items) return;

   //    // IIFE
   //    (async () => {
   //       const response = await fetch(
   //          `https://star-spark-pasta.glitch.me/api/products/${itemParams._id}`
   //       );
   //       const data = await response.json();
   //    })();
   // }, []);

   return (
      <div className='container mx-auto lg:w-1/2 w-full py-12'>
         <h2 className='font-bold text-3xl mb-12'>Cart items</h2>

         <ul>
            <li className='mb-12'>
               <div className='flex items-center justify-between font-bold'>
                  <div className='flex items-center'>
                     <img className='h-16' src='/images/peproni.png' alt='' />
                     <span className='font-bold ml-4 w-48'>
                        Double peperoni
                     </span>
                  </div>

                  <div className='flex items-center gap-4 font-bold'>
                     <button className='bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-full leading-none'>
                        -
                     </button>
                     <span>2</span>
                     <button className='bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-full leading-none'>
                        +
                     </button>
                  </div>

                  <span>₹ 499</span>
                  <button className='bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full leading-none text-white'>
                     Delete
                  </button>
               </div>
            </li>
         </ul>

         <hr />

         <div className='flex flex-col items-end mt-12'>
            <span>
               <b>Grand Total:</b> ₹ 1299
            </span>
            <button className='bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-full leading-none font-bold mt-6'>
               Order Now
            </button>
         </div>
      </div>
   );
};

export default Cart;
