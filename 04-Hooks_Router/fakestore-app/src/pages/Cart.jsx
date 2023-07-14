import CartItem from "../components/CartItem";
import { useCartContext } from "../provider/CartProvider";

const Cart = () => {
  const {
    state: { cart, totalPrice },
  } = useCartContext();

  return (
    <div>
      <div className="flex justify-between">
      <h1>Carrito</h1>
      <span className="font-bold text-3xl">TOTAL: ${totalPrice}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          {cart.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
