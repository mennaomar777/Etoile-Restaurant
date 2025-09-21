import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  function addToCart(dish, quantity = 1) {
    try {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === dish.id);
        if (existingItem) {
          return prevItems.map((item) =>
            item.id === dish.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          return [...prevItems, { ...dish, quantity }];
        }
      });
      toast.success(`${dish.name} added to cart!`);
    } catch (error) {
      toast.error(`${dish.name} wasn't added to cart!`);
      console.log(error);
    }
  }
  function removeFromCart(id) {
    setCartItems((items) => items.filter((item) => item.id !== id));
    toast.success(`Dish removed from the cart!`);
  }
  function clearCart() {
    setCartItems([]);
  }
  function updateQuantity(id, newQuantity) {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  }
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) throw new Error("context not found!");

  return context;
}
