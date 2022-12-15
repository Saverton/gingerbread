import React from 'react';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Houses from './Houses';
import Home from './Home';
import Contestants from './Contestants';
import Header from './Header';
import Footer from './Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Home />
    )
  },
  {
    path: '/contestants/:id',
    element: (
      <Contestants />
    )
  },
  {
    path: '/houses/:id',
    element: (
      <Houses />
    )
  }
]);

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
