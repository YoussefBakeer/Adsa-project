import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import  Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Blog from "./Components/BLog/Blog";
import About from './Components/About/About';
import BLogDetails from "./Components/BLog/BLogDetails";
import Footer from "./Components/Footer/Footer";


const x = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/Home",
        element: <Home />
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/Blog/:slug",
        element: <BLogDetails/>
      },
      {
        path: "/About",
        element: <About />
      },

    ]
  },
]);

function App() {
  return <RouterProvider router={x} />;
}

export default App;