
//src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import App from "./App";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./components/Checkout";
import Nopage from './pages/NoPage'
const router = createBrowserRouter([
{
path: "/",
element: <App/>,
children: [
{ index: true, element: <Home/> },
{ path: "product/:id", element: <ProductDetail/> },
{ path: "cart", element: <Cart/> },
{ path: "checkout", element: <Checkout/> },
{ path: "*", element: <Nopage/> }
]
}
])
createRoot(document.getElementById("root")).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);