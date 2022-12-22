import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { CardCreateAccount, CardCreateAccountBody, CardCreateAccountFooter, CardCreateAccountHeader, Container, CreateAccountButton } from './styles';

import Logo from '../../assets/images/logo.png';
import InputField from '../../components/InputField';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FormValues } from '../../types/FormValues';

const schema = yup
  .object()
  .shape({
    usuario:
      yup
        .string()
        .required('Preencha o campo acima.'),
    email:
      yup
        .string()
        .email('Digite um e-mail válido.')
        .required('Preencha o campo acima.'),
    senha:
      yup
        .string()
        .min(8, 'O campo de senha deve conter no mínimo 8 caracteres.')
        .max(32, 'O campo de senha deve conter no máximo 32 caracteres.')
        .required('Preencha o campo acima.'),
    confSenha:
      yup
        .string()
        .min(8, 'O campo de senha deve conter no mínimo 8 caracteres.')
        .max(32, 'O campo de senha deve conter no máximo 32 caracteres.')
        .required('Preencha o campo acima.')
        .oneOf([yup.ref('senha')], 'As senhas informadas são diferentes.'),
  })
  .required();

const CreateAccount: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const handleRegistration = (data: any) => { console.log('data', data); reset() };

  return (
    <Container>
      <CardCreateAccount>
        <CardCreateAccountHeader>
          <img src={Logo} alt="Logo do projeto" />
        </CardCreateAccountHeader>
        <CardCreateAccountBody>
          <form onSubmit={handleSubmit(handleRegistration)}>

            <InputField
              type='text'
              name='usuario'
              label='Usuario'
              register={register}
              errors={errors}
              required
            />

            <InputField
              type='email'
              name='email'
              label='Email'
              register={register}
              errors={errors}
              required
            />

            <InputField
              type='password'
              name='senha'
              label='Senha'
              register={register}
              errors={errors}
              required
            />

            <InputField
              type='password'
              name='confSenha'
              label='Confirmar senha'
              register={register}
              errors={errors}
              required
            />

            <CreateAccountButton>
              <button>Entrar</button>
            </CreateAccountButton>

            <CardCreateAccountFooter>

              <Link to="/login">
                <p> <FaArrowLeft /> Voltar para a página anterior</p>
              </Link>

            </CardCreateAccountFooter>

          </form>
        </CardCreateAccountBody>
      </CardCreateAccount>
    </Container>
  );
}

export default CreateAccount;