import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route element={<AuthRoute setUser={setUser} />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/admin' element={<Admin user={user} />} />
      </Route> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
