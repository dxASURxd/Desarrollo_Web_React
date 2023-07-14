import Swal from "sweetalert2";
import { useCartContext } from "../provider/CartProvider";

const ProductItem = ({ product }) => {
  const { dispatch } = useCartContext();

  return (
    <div className="flex flex-col border border-gray-300 shadow-sm rounded-xl p-4">
      <img
        src={product.image}
        alt={product.title}
        className="h-28 object-cover self-center"
      />
      <h2 className="font-bold">{product.title}</h2>
      <span>${product.price}</span>
      <p>{product.description}</p>
      <button
        className="bg-[#572364] hover:bg-[#56145b] text-white rounded-md p-2 mt-2"
        onClick={() => {
          dispatch({ type: "ADD_TO_CART", payload: product });
          Swal.fire({
            icon: 'success',
            title: 'Agregado al carrito',
            showConfirmButton: false,
            timer: 1500
          })
        }}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductItem;
