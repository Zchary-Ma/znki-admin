import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import DeckPage from './pages/DeckPage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const routes = (isLoggedIn: boolean): { [key: string]: unknown }[] => [
  {
    path: '/app',
    element: isLoggedIn ? <MainLayout /> : <Navigate to="/login" />,
    children: [
      { path: 'deck', element: <DeckPage /> },
      { path: '404', element: <NotFound /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/app/404" /> },
    ],
  },
  {
    path: '/',
    element: !isLoggedIn ? <Login /> : <Navigate to="/app/dashboard" />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '*', element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;
