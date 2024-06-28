import React from 'react';
import Galaxia from './Galaxia';
import { useQuery, gql } from '@apollo/client';

const GALAXIAS_QUERY = gql`
  query {
    galaxias {
      id
      nombre
      descripcion
      ubicacion
    }
  }
`;

const GalaxiaList = () => {
  const { data } = useQuery(GALAXIAS_QUERY);

  return (
    <div>
      {data && (
        <>
          {data.galaxias.map((galaxia, index) => (
            <Galaxia key={galaxia.id} galaxia={galaxia} index={index} />
          ))}
        </>
      )}
    </div>
  );
};

export default GalaxiaList;
