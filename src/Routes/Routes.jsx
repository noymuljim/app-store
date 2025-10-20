import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../components/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import InstallList from '../pages/Installed/InstallList';
import AllApps from '../pages/AllApps/AllApps';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [

            {
                index: true,
                path: '/',
                loader: () => fetch('/homeData.json'),
                Component: Home
            },
            {
                path:'/apps',
                Component:AllApps
            },
            {
                path:'/installedList',
                Component:InstallList
            },
            {
                path: '*', 
                element: <ErrorPage />
            },
        ]
    }
]);