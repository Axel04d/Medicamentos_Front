import React from 'react';
import Medicamento from './Medicamento';
import { useQuery, gql } from '@apollo/client';

const MEDICAMENTOS_QUERY = gql`
  query {
    medicamentos {
      id
      nombre
      descripcion
      enfermedad
    }
  }
`;

const MedicamentoList = () => {
  const { data } = useQuery(MEDICAMENTOS_QUERY);

  return (
    <div>
      {data && (
        <>
          {data.medicamentos.map((medicamento, index) => (
            <Medicamento key={medicamento.id} medicamento={medicamento} index={index} />
          ))}
        </>
      )}
    </div>
  );
};

export default MedicamentoList;
