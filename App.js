import React, { useState } from 'react';
import './App.css';
import Routes from './routes/routes';
import Context from "./context/context";

const { Provider } = Context;


function App() {
  const [privateRoute, setPrivateRoute] = useState(false);

  return (
    <Provider value={{
      privateRoute: privateRoute,
      setPrivateRoute: setPrivateRoute
    }}>
      <Routes></Routes>
    </Provider>
  );
}

export default App;