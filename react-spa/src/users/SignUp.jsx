import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AppInput from '../components/AppInput';
import { signUp } from '../store/user'
import { AppButton } from '../theme';
import UserFormLayout from './UserFormLayout';

let SignUp = (props) => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
  
    const { register, handleSubmit } = useForm();
  
    let onSubmit = async (data) => {
      await dispatch(
        signUp(
          { credentials: data }
        )
      )
      navigate("/videos");
    }
  

    return(
        <UserFormLayout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <AppInput type="email" name="email" register={register} registerName={'email'} label="Correo electrónico" />
                <AppInput type="text" name="username" register={register} registerName={'username'} label="Nombre de usuario" />
        
                <AppInput type="password" name="password" register={register} registerName={'password'} label="Contraseña" />
        
                <AppButton type="submit" small>Crear cuenta</AppButton>
    
            </form>
        </UserFormLayout>
    )
}

export default SignUp;