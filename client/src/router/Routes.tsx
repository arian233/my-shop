import App from "../App";
import AboutPage from "../components/about/AboutPage";
import ProductDetailsPage from "../components/catalog/ProductDetails";
import HomePage from "../components/home/HomePage";
import Catalog from "../components/catalog/Catalog";
import { createBrowserRouter } from "react-router-dom";
import ContactPage from "../components/contact/ContactPage";

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
    ],
  },
]);
