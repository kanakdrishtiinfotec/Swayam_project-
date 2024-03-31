import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import Home from './Home/Home.jsx';
import Shop from './shop/Shop.jsx';
import SingleProduct from './shop/SingleProduct.jsx';
import CartPage from "./shop/CartPage.jsx"
import Aboutus from './components/Aboutus.jsx';
import Policy from './components/Policy.jsx';
import Terms from './components/Terms.jsx';
import DashBoard from "./dashboard/DashBoard.jsx";
import CategoryForm from "./dashboard/CategoryForm.jsx";
import ProductForm from "./dashboard/ProductForm.jsx";
import OrderHistory from "./dashboard/OrderHistory.jsx";
import ProductList from "./dashboard/ProductList.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path:"/",
    element:<Home/>},
    {
      path:"/shop",
      element: <Shop/>  
    },
    {
      path: "shop/:id",
      element:<SingleProduct/>
    },
    {
      path : "/cart-page",
      element : <CartPage/>
    },
    { path: "/dashboard/", element: <DashBoard />,
    children:[
        {path:"add-category",element:<CategoryForm />},
        {path:"add-product",element:<ProductForm />},
        {path:"order-history",element:<OrderHistory />},
        {path:"all-products",element:<ProductList />}
    ]
  },
    {
      path:"/about",
      element:<Aboutus/>
    },
    {
      path:'/policy',
      element:<Policy/>
    },
    {
      path:'/terms',
      element:<Terms/>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
