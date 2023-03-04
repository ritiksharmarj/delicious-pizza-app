import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

const Cart = () => {
   let grandTotal = 0;
   const { cart, setCart } = useContext(CartContext);

   // Store all the cart items in the lists
   const [savedCartItems, setSavedCartItems] = useState([]);

   // Don't make another request to server if cart is already fetched once
   const [priceFetched, setPriceFetched] = useState(false);

   useEffect(() => {
      // If there is no item in the cart, return nothing
      if (!cart.items) return;

      // If cart page already fetched cart items then don't make another request, return nothing
      if (priceFetched) return;

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
         setPriceFetched(true);
      })();
   }, [cart, priceFetched]);

   // Get product quantity
   const getProductQty = (productId) => {
      return cart.items[productId];
   };

   // Increase the product quantity when click '+' icon and update the global cart state
   const productIncrement = (productId) => {
      const oldQty = cart.items[productId];
      const _cart = { ...cart };
      _cart.items[productId] = oldQty + 1;
      _cart.totalItems += 1;
      setCart(_cart);
   };

   // Decrease the product quantity when click '-' icon and update the global cart state
   const productDecrement = (productId) => {
      const oldQty = cart.items[productId];

      if (oldQty === 1) return;

      const _cart = { ...cart };
      _cart.items[productId] = oldQty - 1;
      _cart.totalItems -= 1;
      setCart(_cart);
   };

   // Calc total sum for each item with increment/decrement quantity
   const getSumItem = (productId, productPrice) => {
      const sum = productPrice * getProductQty(productId);

      // Calc grand total
      grandTotal += sum;

      return sum;
   };

   const handleDelete = (productId) => {
      const _cart = { ...cart };
      const productQty = _cart.items[productId];
      _cart.totalItems -= productQty; // update total items to show in the header

      delete _cart.items[productId]; // removes a property from an object
      setCart(_cart);

      // Also remove item from the cart list
      const updatedCartItems = savedCartItems.filter(
         (item) => item._id !== productId
      );
      setSavedCartItems(updatedCartItems);
   };

   const handleOrderNow = () => {
      setCart({});
      setSavedCartItems([]);
      // alert('Order placed successfully!');
   };

   // If there is no item selected in the cart, show empty cart layout
   return savedCartItems.length ? (
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
                           <button
                              onClick={() => {
                                 productDecrement(item._id);
                              }}
                              className='bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-full leading-none'
                           >
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

                        <span>₹ {getSumItem(item._id, item.price)}</span>
                        <button
                           onClick={() => {
                              handleDelete(item._id);
                           }}
                           className='bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full leading-none text-white'
                        >
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
               <b>Grand Total:</b> ₹ {grandTotal}
            </span>
            <button
               onClick={handleOrderNow}
               className='bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-full leading-none font-bold mt-6'
            >
               Order Now
            </button>
         </div>
      </div>
   ) : (
      <div className='container mx-auto h-full lg:w-1/2 w-full py-12 flex flex-col items-center'>
         <img
            className='h-72 mb-6'
            src='/images/Pizza maker-amico.svg'
            alt='Empty cart'
         />
         <h2 className='font-medium text-3xl'>
            Your cart is waiting to be filled
         </h2>
         <span className='text-lg mt-4'>
            Make your task list and Order it now!
         </span>
         <Link to='/'>
            <button className='px-6 py-2 rounded-full text-white font-bold bg-yellow-500 hover:bg-yellow-600 transition duration-300 mt-10'>
               Start shopping
            </button>
         </Link>
      </div>
   );
};

export default Cart;
