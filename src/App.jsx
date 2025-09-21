import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Contact from "./components/Contact/Contact";
import Notfound from "./components/NotFound/Notfound";
import CategoryItems from "./components/CategoryItems/CategoryItems";
import DishDetails from "./components/DishDetails/DishDetails";
import CartProvider from "./context/cartContext";
import Cart from "./components/Cart/Cart";
import { ToastContainer } from "react-toastify";
import CashCheckout from "./components/CachCheckout/CachCheckout";
import OrderSuccess from "./components/OrderSuccess/OrderSuccess";
import { UserProvider } from "./context/userContext";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import ReserveTable from "./components/ReserveTable/ReserveTable";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "menu", element: <Menu /> },
        { path: "menu/:category", element: <CategoryItems /> },
        { path: "menu/:category/dish/:id", element: <DishDetails /> },
        { path: "contact", element: <Contact /> },
        { path: "cart", element: <Cart /> },
        { path: "cashCheckout", element: <CashCheckout /> },
        { path: "orderSuccess", element: <OrderSuccess /> },
        { path: "signUp", element: <SignUp /> },
        { path: "signIn", element: <SignIn /> },
        { path: "reserve", element: <ReserveTable /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return (
    <>
      <UserProvider>
        <CartProvider>
          <RouterProvider router={router}></RouterProvider>
          <ToastContainer />
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
