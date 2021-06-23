import { createContext, useEffect, useState } from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { auth, firebase } from './services/firebase';

import { AuthContextProvider } from './context/AuthContext'




function App() {



  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>  
    </BrowserRouter>
  );
}

export default App;
