import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import { RouterProvider, Outlet, createBrowserRouter } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Body from './components/Body';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
};

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element:( 
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <About />
                    </Suspense>
                    
                )
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/grocery',
                element:(
                    <Suspense fallback={<div>Loading...</div>}>
                        <Grocery />
                    </Suspense>
                ) 
 
            }
        ],
        errorElement: <Error />
    }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);