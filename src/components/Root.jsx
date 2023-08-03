import React, { useEffect, useState } from 'react';
import '../App.css';
import AllProducts from './AllProducts';
import SingleProduct from './SingleProduct';

function Root () {
  const [listProducts, setListProducts] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);
  const [isProductClicked, setIsProductClicked] = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data.products);
        setListProducts(data.products);
      } catch (err) {
        console.error("Store is Loading....", err);
      }
    };
    fetchAll();
  }, []);

  const handleClick = async (id) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setOneProduct(data);
      setIsProductClicked(true);
    } catch (err) {
      console.error("Store Can't Find Single Product", err);
    }
  };

  const handleGoBack = () => {
    setOneProduct(null);
    setIsProductClicked(false);
  };

  return (
    <>
      {isProductClicked ? (
        <SingleProduct oneProduct={oneProduct} handleGoBack={handleGoBack} />
      ) : (
        <AllProducts listProducts={listProducts} handleClick={handleClick} />
      )}
    </>
  );
}

export default Root;
