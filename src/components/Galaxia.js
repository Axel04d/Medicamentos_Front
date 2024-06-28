import React from 'react';

const Galaxia = ({ galaxia, index }) => {
  return (
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{index + 1}.</span>
      </div>
      <div className="ml1">
        <div>
          {galaxia.nombre} ({galaxia.descripcion})
        </div>
        <div className="f6 lh-copy gray">
          Ubicación: {galaxia.ubicacion}
        </div>
      </div>
    </div>
  );
};

export default Galaxia;
