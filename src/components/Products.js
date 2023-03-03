import { useState, useEffect } from 'react';
import Product from './Product';

const Products = () => {
   const [productItems, setProductItems] = useState([]);

   useEffect(() => {
      // fetch('https://star-spark-pasta.glitch.me/api/products')
      //    .then((response) => response.json())
      //    .then((products) => {
      //       setProductItems(products);
      //    });
      const products = async () => {
         const response = await fetch(
            'https://star-spark-pasta.glitch.me/api/products'
         );
         const data = await response.json();

         setProductItems(data);
      };
      products();
   }, []);

   return (
      <div className='container mx-auto'>
         <h2 className='text-3xl font-bold my-12'>Products</h2>

         <div className='grid grid-cols-5 my-12 gap-24'>
            {productItems.map((item) => (
               <Product key={item._id} product={item} />
            ))}
         </div>
      </div>
   );
};

export default Products;
