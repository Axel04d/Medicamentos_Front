import React from 'react';
import CreateMedicamento from './CreateMedicamento';
import Header from './Header';
import MedicamentoList from './MedicamentoList';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<MedicamentoList />} />
          <Route path="/create" element={<CreateMedicamento />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
