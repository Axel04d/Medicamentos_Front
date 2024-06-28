// src/components/CreateMedicamento.js
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_MEDICAMENTO_MUTATION = gql`
  mutation CreateMedicamentoMutation(
    $nombre: String!
    $descripcion: String!
    $enfermedad: String!
  ) {
    createMedicamento(nombre: $nombre, descripcion: $descripcion, enfermedad: $enfermedad) {
      id
      nombre
      descripcion
      enfermedad
    }
  }
`;

const CreateMedicamento = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    nombre: '',
    descripcion: '',
    enfermedad: ''
  });

  const [createMedicamento] = useMutation(CREATE_MEDICAMENTO_MUTATION, {
    variables: {
      nombre: formState.nombre,
      descripcion: formState.descripcion,
      enfermedad: formState.enfermedad
    },
    onCompleted: () => navigate('/')
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createMedicamento();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.nombre}
            onChange={(e) =>
              setFormState({
                ...formState,
                nombre: e.target.value
              })
            }
            type="text"
            placeholder="Nombre del medicamento"
          />
          <input
            className="mb2"
            value={formState.descripcion}
            onChange={(e) =>
              setFormState({
                ...formState,
                descripcion: e.target.value
              })
            }
            type="text"
            placeholder="Descripción del medicamento"
          />
          <input
            className="mb2"
            value={formState.enfermedad}
            onChange={(e) =>
              setFormState({
                ...formState,
                enfermedad: e.target.value
              })
            }
            type="text"
            placeholder="Enfermedad que trata"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateMedicamento;
