import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

const Product = (props) => {
   const { product } = props;
   const { cart, setCart } = useContext(CartContext);
   console.log(cart);

   const addToCart = (e, product) => {
      e.preventDefault();

      let _cart = { ...cart };

      // If there is no item in the cart
      if (!_cart.items) {
         _cart.items = {};
      }

      // If there is already an item with the same product Id
      if (_cart.items[product._id]) {
         _cart.items[product._id] += 1;
      } else {
         // No product with this Id but we want to add new one
         _cart.items[product._id] = 1;
      }

      if (!_cart.totalItems) {
         _cart.totalItems = 0;
      }

      // Total items in the cart
      _cart.totalItems += 1;

      // Update cart
      setCart(_cart);
   };

   return (
      <Link to={`/products/${product._id}`}>
         <div>
            <img src={product.image} alt={product.name} />
            <div className='text-center'>
               <h3 className='text-lg font-bold my-2'>{product.name}</h3>
               <span className='bg-gray-200 rounded-full text-sm py-1 px-4'>
                  {product.size}
               </span>
            </div>
            <div className='flex flex-row items-center justify-between mt-4'>
               <span>₹ {product.price}</span>
               <button
                  onClick={(e) => {
                     addToCart(e, product);
                  }}
                  className='py-1 px-4 rounded-full font-bold bg-yellow-500'
               >
                  ADD
               </button>
            </div>
         </div>
      </Link>
   );
};

export default Product;
