import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Home from './components/Home';
// import About from './components/About';
import Services from './components/Services';
import Contactus from './components/Contactus';
import Nav from './components/Nav';
// import Product1 from './components/Product1';
import Error from './components/Error';
import Productdetail from './components/Productdetail';
import TheamProvider, { TheamContext } from './Context/TheamContext';

const About = React.lazy(() => import('./components/About'));
const Product = React.lazy(() => import('./components/Product1'))
const router = createBrowserRouter([
    {
        path: '/',
        element: <Nav />,

        children: [
            {
                index: '/home',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                // element: <About />
                element:
                    <React.Suspense><About /></React.Suspense>
            },
            {
                path: '/service',
                element: <Services />
            },
            {
                path: '/contact',
                element: <Contactus />
            }, {
                path: '/products',
                // element: <Product1 />
                element:
                    <React.Suspense><Product /></React.Suspense>
            },
            {
                path: '/product/:id',
                element: <Productdetail />
            },
            {
                path: '*',
                element: <Error />,
            }
        ]
    },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <TheamProvider>
    <RouterProvider router={router}/>
  </TheamProvider>
);


reportWebVitals();
