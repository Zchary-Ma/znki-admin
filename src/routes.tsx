import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import DeckPage from './pages/DeckPage';
import NotFound from './pages/NotFound';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      //   { path: 'login', element: <Login /> },
      { path: 'deck', element: <DeckPage /> },
      { path: '404', element: <NotFound /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
