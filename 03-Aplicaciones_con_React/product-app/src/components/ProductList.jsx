import { useEffect, useState } from "react";
import Form from "./Form";
import ProductItem from "./ProductItem";

const ProductList = () => {

  const [productCount, setProductCount] = useState('');
  const [products, setProducts] = useState([
    {
      name: 'Producto Uno',
      description: 'Descripción Uno',
      price: 34
    },
    {
      name: 'Producto Dos',
      description: 'Descripción Dos',
      price: 354
    },
    {
      name: 'Producto Tres',
      description: 'Descripción Tres',
      price: 12
    }
  ]);

  const addProduct = (product) => {
    setProducts([...products, product]);
    setProductCount(productCount + 1)
  }

  useEffect(() => {
    setProductCount(products.length);
  }, [products]);

  return (
    <>
      <h1>Mi lista de productos {productCount}</h1>
      <Form onSubmit={addProduct} />
      <ul className="flex gap-4">
        {products.map((product) => (
          <li className="bg-slate-300 rounded-xl text-center w-[145px]">
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
