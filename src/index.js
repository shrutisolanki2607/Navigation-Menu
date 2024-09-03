import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Resources from './components/Resources';
import PrivateResources from './components/PrivateResources';
import Ivestors from './components/Ivestors';
import Founders from './components/Founders';
import Videos from './components/Videos';
import Vlogs from './components/Vlogs';
import Compass from './components/Compass';
import Mini from './components/Mini';
import Full from './components/Full';
//import Navigation from './components/Navigation';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//    <Route path='/' element={<Layout/>}>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='/Resources' element={<Resources/>}>
//             <Route path='/Resources/PrivateResources' element={<PrivateResources/>}/>
//         </Route>
//         <Route path='/Ivestors' element={<Ivestors/>}/>
//         <Route path='/Founders' element={<Founders/>}/>
//    </Route>
//   ))

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : '/Home',
        element : <Home/>
      },
      {
        path : '/Resources',
        element : <Resources/>,
        children : [
          {
            path : '/Resources/PrivateResources',
            element : <PrivateResources/> 
          },
          {
            path : '/Resources/Vlogs',
            element : <Vlogs/>
          },
          {
            path : '/Resources/compass',
            element : <Compass/>
          },
          {
            path : '/Resources/Videos',
            element : <Videos/>,
            children : [
              {
                path : '/Resources/Videos/Mini',
                element : <Mini/>
              },
              {
                path : '/Resources/Videos/Full',
                element : <Full/>
              }
            ]
          }
        ]
      },
      {
        path:'/Investors',
        element :<Ivestors/>
      },
      {
        path : '/Founders',
        element : <Founders/>
      }
    ]
  }
]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
