import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import Register from './auth/Register'
import Login from './auth/Login'
import Home from './components/home'

// const store = createStore(reducer);

const App = () => {
  return (
    <Routes>
      {/* <Provider store={store}> */}
        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/home' element={<Home/>} />
        </Routes>
    {/* </Provider> */}
    </Routes>
  );
};

export default App;
