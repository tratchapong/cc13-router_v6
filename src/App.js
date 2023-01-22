import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import AllProducts from "./pages/AllProducts";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Services from "./pages/Services";

const router = createBrowserRouter([
  { path: "/", element: <Home/>,
    errorElement : <ErrorPage />,
    children : [
      { index:true, element: <Index />},
      { path: "products/", element: <AllProducts /> },
      { path: "products/:idx", element: <Products /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
