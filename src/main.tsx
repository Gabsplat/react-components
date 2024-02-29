import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ComplexForm from "./pages/ComplexForm/ComplexForm.jsx";
import AccordionPage from "./pages/Accordion/AccordionPage.jsx";
import BasicSearchListPage from "./pages/BasicSearchList/BasicSearchListPage.jsx";

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
    path: "/basicsearchlist",
    element: <BasicSearchListPage />,
  },
]);

ReactDOM.createRoot(
  document.getElementById("root") || new DocumentFragment()
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
