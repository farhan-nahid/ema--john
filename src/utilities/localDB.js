// use local storage as your db for now

// 1 . Find the space to store the data

const getStoredCart = () => {
  const exists = localStorage.getItem('shopping__cart');
  return exists ? JSON.parse(exists) : {};
};

const updateDB = (cart) => {
  localStorage.setItem('shopping__cart', JSON.stringify(cart));
};

const addToDb = (id) => {
  const storedCart = getStoredCart();
  if (id in storedCart) {
    storedCart[id] = storedCart[id] + 1;
  } else {
    storedCart[id] = 1;
  }
  updateDB(storedCart);
};

const removeFromDb = (id) => {
  const storedCart = getStoredCart();
  delete storedCart[id];
  updateDB(storedCart);
};

const clearTheCart = () => localStorage.removeItem('shopping__cart');

export { addToDb, getStoredCart, removeFromDb, clearTheCart };
