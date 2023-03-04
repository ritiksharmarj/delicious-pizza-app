export const getCart = () => {
   const cart = localStorage.getItem('cartKey');
   return cart;
};

export const storeCart = (cart) => {
   localStorage.setItem('cartKey', JSON.stringify(cart));
};
