import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import HomePage from './routes/HomePage.jsx';
import PostListPage from './routes/PostListPage.jsx';
import WritePage from './routes/WritePage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import RegisterPage from './routes/RegisterPage.jsx';
import Mainlayout from './Layouts/layouts.jsx';

const router = createBrowserRouter([
  { 
   element : <Mainlayout/>,
   children : [
    {
      path : "/",
      element : <HomePage />
     },
     {
      path : "/posts",
      element : <PostListPage />
     },
     {
      path : "/:slug",
      element : <PostListPage />
     },
     {
      path : "/write",
      element : <WritePage />
     },
     {
      path : "/login",
      element : <LoginPage />
     },
     {
      path : "/register",
      element : <RegisterPage />
     },
   ]
  
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
