import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
   const [savedCartItems, setSavedCartItems] = useState([]);
   console.log(savedCartItems);
   const { cart, setCart } = useContext(CartContext);

   useEffect(() => {
      // If there is no item in the cart, return nothing
      if (!cart.items) return;

      // Using fetch() to POST json data
      (async () => {
         const res = await fetch(
            'https://star-spark-pasta.glitch.me/api/products/cart-items',
            {
               method: 'POST',
               headers: {
                  'Content-type': 'application/json',
               },
               body: JSON.stringify({
                  ids: Object.keys(cart.items), // converting cart.items object keys to an array
               }),
            }
         );

         const data = await res.json();

         if (!res.ok) throw new Error('Internal server error');

         setSavedCartItems(data);
      })();
   }, [cart]);

   // Get product quantity
   const getProductQty = (productId) => {
      return cart.items[productId];
   };

   // Increase the product quantity when click '+' icon
   const productIncrement = (productId) => {
      const oldQty = cart.items[productId];
      const _cart = { ...cart };
      _cart.items[productId] = oldQty + 1;
      _cart.totalItems += 1;
      setCart(_cart);
   };

   return (
      <div className='container mx-auto lg:w-1/2 w-full py-12'>
         <h2 className='font-bold text-3xl mb-12'>Cart items</h2>

         <ul>
            {savedCartItems.map((item) => {
               return (
                  <li className='mb-12' key={item._id}>
                     <div className='flex items-center justify-between font-bold'>
                        <div className='flex items-center'>
                           <img
                              className='h-16'
                              src={item.image}
                              alt={item.name}
                           />
                           <span className='font-bold ml-4 w-48'>
                              {item.name}
                           </span>
                        </div>

                        <div className='flex items-center gap-4 font-bold'>
                           <button className='bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-full leading-none'>
                              -
                           </button>
                           <span>{getProductQty(item._id)}</span>
                           <button
                              onClick={() => {
                                 productIncrement(item._id);
                              }}
                              className='bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-full leading-none'
                           >
                              +
                           </button>
                        </div>

                        <span>₹ {item.price}</span>
                        <button className='bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full leading-none text-white'>
                           Delete
                        </button>
                     </div>
                  </li>
               );
            })}
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
