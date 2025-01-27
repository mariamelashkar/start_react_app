import Header from "./Components/Header/Header"
import Protofilio from "./Components/Protofilio/Protfilio"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Children } from "react"
import Layout from "./Components/Layout/Layout"


function App() {
  const Router = createBrowserRouter([
    {  path:"/",element:<Layout />, children: [
    { index: true, element: <Header /> }, 
    { path: "about", element: <About /> },
    { path: "protofilio", element:<Protofilio />},
    { path: "contact", element: <Contact /> },
     
  ],
},
])

  return (
    <>
    <RouterProvider router={Router} /></>
  )
}

export default App
