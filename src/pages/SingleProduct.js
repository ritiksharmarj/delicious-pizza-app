import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
   const [singleProductItem, setSingleProductItem] = useState({});

   // Get the product item Id param from the URL.
   const itemParams = useParams();

   // Fetch data (product item) from the server using this Param Id.
   useEffect(() => {
      // IIFE
      (async () => {
         const response = await fetch(
            `https://star-spark-pasta.glitch.me/api/products/${itemParams._id}`
         );
         const data = await response.json();

         setSingleProductItem(data);
      })();
   }, [itemParams._id]);

   return (
      <div className='container mx-auto py-12'>
         <button className='font-bold mb-12'>Back</button>

         <div className='flex gap-16'>
            <img src='/images/peproni.png' alt='peproni' />
            <div className='flex flex-col'>
               <h3 className='text-xl font-bold'>{singleProductItem.name}</h3>
               <span className='text-md'>{singleProductItem.size}</span>
               <span className='font-bold mt-2'>
                  ₹ {singleProductItem.price}
               </span>
               <button className='py-1 px-8 mt-4 rounded-full font-bold bg-yellow-500'>
                  Add to cart
               </button>
            </div>
         </div>
      </div>
   );
};

export default SingleProduct;
