import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import DeckPage from './pages/DeckPage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { DemoPage } from './pages/DemoPage';

// const routes = (isLoggedIn: boolean): { [key: string]: unknown }[] => [
const routes = [
  {
    path: '/app',
    // element: isLoggedIn ? <MainLayout /> : <Navigate to="/login" />,
    element: <MainLayout />,
    children: [
      { path: 'deck', element: <DeckPage /> },
      { path: '404', element: <NotFound /> },
      { path: 'demo', element: <DemoPage /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/app/404" /> },
    ],
  },
  {
    path: '/',
    // element: !isLoggedIn ? <Login /> : <Navigate to="/app/dashboard" />,
    element: <Login />,
    children: [{ path: 'login', element: <Login /> }],
  },
];

export default routes;
