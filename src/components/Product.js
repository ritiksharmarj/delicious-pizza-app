import { Link } from 'react-router-dom';

const Product = (props) => {
   const { product } = props;

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
               <button className='py-1 px-4 rounded-full font-bold bg-yellow-500'>
                  ADD
               </button>
            </div>
         </div>
      </Link>
   );
};

export default Product;
