import App from "../App";
import AboutPage from "../components/about/AboutPage";
import ProductDetailsPage from "../components/catalog/ProductDetails";
import Catalog from "../components/catalog/Catalog";
import { createBrowserRouter } from "react-router-dom";
import ContactPage from "../components/contact/ContactPage";
import Login from "../components/user/Login";
import Register from "../components/user/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Catalog /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:id", element: <ProductDetailsPage /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);
