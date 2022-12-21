import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { CardLogin, CardLoginBody, CardLoginFooter, CardLoginHeader, Container, LoginButton } from './styles';

import Logo from '../../assets/images/logo.png';
import InputField from '../../components/InputField';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type FormValues = {
  usuario: string;
  senha: string;
}

const schema = yup
  .object()
  .shape({
    usuario: yup.string().required('Preencha o campo acima.'),
    senha: yup.string().min(8, 'O campo de senha deve conter no mínimo 8 caracteres.').max(32, 'O campo de senha deve conter no máximo 32 caracteres.').required('Preencha o campo acima.'),
  })
  .required();

const Login: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const handleRegistration = (data: any) => { console.log('data', data); reset() };

  return (
    <Container>
      <CardLogin>
        <CardLoginHeader>
          <img src={Logo} alt="Logo do projeto" />
        </CardLoginHeader>
        <CardLoginBody>
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
              type='password'
              name='senha'
              label='Senha'
              register={register}
              errors={errors}
              required
            />

            <LoginButton>
              <button>Entrar</button>
            </LoginButton>

            <CardLoginFooter>

              <p>
                Ainda não possui conta?
                <Link to="/">
                  Criar conta
                </Link>
              </p>

              <Link to="/">
                <p> <FaArrowLeft /> Voltar </p>
              </Link>
              
            </CardLoginFooter>

          </form>
        </CardLoginBody>
      </CardLogin>
    </Container>
  );
}

export default Login;