import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './components/about';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/room/:id',
    element:<RoomDetails/>
  }
])

const App = () => {
  return <div>
    <Header/>
    <RouterProvider router={router}/>
    <About/>
    <Footer/>
  </div>;
};

export default App;
