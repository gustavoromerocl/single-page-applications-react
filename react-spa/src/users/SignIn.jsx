import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signIn } from '../store/user';
import UserFormLayout from './UserFormLayout';
import AppInput from '../components/AppInput';
import { AppButton } from '../theme';

let SignIn = (props) => {
    let dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    let onSubmit = (data) => {
        /* console.log(data); */
        dispatch(
            signIn(
                { credentials: data }
            )
        )
    }

    return (
        <UserFormLayout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <AppInput type="email" register={register} registerName={'email'} name="email" label='Correo electrónico' />
                <AppInput type="password" register={register} registerName={'password'} name="password" label='Contraseña' />
                <AppButton type="submit" small>Enviar</AppButton>
                
            </form>
        </UserFormLayout>
    )
}

export default SignIn;