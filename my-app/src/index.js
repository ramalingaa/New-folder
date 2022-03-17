import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PageContextProvider, IconProvider, WishCounterProvider, CartCounterProvider, CartProvider, AuthProvider } from './frontEnd/Context/context-index';
import {BrowserRouter as Router} from "react-router-dom"
import { makeServer } from "./server";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>  
    <Router>
      <PageContextProvider>
      <IconProvider>
      <WishCounterProvider> 
        <IconProvider>
        <CartCounterProvider>
        <CartProvider>
          <AuthProvider>
             <App />
          </AuthProvider>
        </CartProvider>
        </CartCounterProvider>

      </IconProvider>
      </WishCounterProvider>
        </IconProvider>

      </PageContextProvider>
      </Router>
  </React.StrictMode>,
  
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
