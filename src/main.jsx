import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//imports for pages
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

// imports for redux:
import {Provider}  from 'react-redux';
import {store} from './services/store/store.js';

let router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} >

        <App />

      </RouterProvider>
    </Provider>
  </StrictMode>,
)
