import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Layouts/Root";
import Home from "./components/Home";
import AddCoffee from "./pages/AddCoffee";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index:true,
        loader: ()=>fetch('http://localhost:3000/coffees'),
        Component: Home,
      },
      {
        path: '/addCoffee',
        Component: AddCoffee,
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
