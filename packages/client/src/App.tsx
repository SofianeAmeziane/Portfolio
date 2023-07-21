import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/homePage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
