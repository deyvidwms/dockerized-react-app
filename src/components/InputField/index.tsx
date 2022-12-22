import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../types/FormValues';

import { Container } from './styles';

type dynamicJSON = {
  [key: string]: any
}

type Props = { 
  name: 'usuario' | 'email' | 'senha' | 'confSenha';
  label: string; 
  register: UseFormRegister<FormValues>;
  errors: dynamicJSON;  
  required: boolean;
  type: string;
}

const InputField: React.FC<Props> = ({name, label, register, required, type, errors}) => {
  return (
    <Container error={ errors[name] !== undefined }>
      {label && <label htmlFor={name}>{label} {required && <span>*</span>}</label>}
      <input
        id={name}
        type={type}
        {...register(name)}
        
      />
      { errors[name] !== undefined && <p> {errors[name].message} </p> }
    </Container>
  );
}

export default InputField;