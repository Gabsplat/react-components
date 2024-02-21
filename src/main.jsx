import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ComplexForm from "./pages/ComplexForm/ComplexForm.jsx";
import AccordionPage from "./pages/Accordion/AccordionPage.jsx";
import SearchListPage from "./pages/SearchList/SearchListPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/complexform",
    element: <ComplexForm />,
  },
  {
    path: "/accordion",
    element: <AccordionPage />,
  },
  {
    path: "/searchList",
    element: <SearchListPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
