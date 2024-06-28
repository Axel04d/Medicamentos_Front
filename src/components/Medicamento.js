import React from 'react';

const Medicamento = ({ medicamento, index }) => {
  return (
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{index + 1}.</span>
      </div>
      <div className="ml1">
        <div>
          {medicamento.nombre} ({medicamento.descripcion})
        </div>
        <div className="f6 lh-copy gray">
          Enfermedad: {medicamento.enfermedad}
        </div>
      </div>
    </div>
  );
};

export default Medicamento;
