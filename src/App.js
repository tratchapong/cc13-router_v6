import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <h1>Hello, Homepage</h1> },
  { path: "/products", element: <h1>Hello, Products page</h1> },
  { path: "/services", element: <h1>Hello, Service page</h1> },
  { path: "/about", element: <h1>Hello, About page</h1> },
]);

function App() {
  return (
    <div className="App">
      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>
      </nav>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
