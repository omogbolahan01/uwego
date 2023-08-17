import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import How from "./pages/How";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="how" element={<How />} />
      <Route path="contact" element={<Contact />} />
      <Route path="faqs" element={<Faqs />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
