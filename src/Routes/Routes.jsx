import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../components/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import InstallList from '../pages/Installed/InstallList';
import AllApps from '../pages/AllApps/AllApps';
import AppDetails from '../pages/AppDetails/AppDetails';

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
                path: '/apps',
                loader: () => fetch('/allAppsData.json'),
                Component: AllApps
            },
            {
                path: '/installedList',
                Component: InstallList
            },
            {
                path: '/appDetails/:id',
                loader: () => fetch('/allAppsData.json'),
                Component: AppDetails
            },
            {
                path: '*',
                element: <ErrorPage />
            },
        ]
    }
]);