import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signIn } from '../store/user';

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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register('email')} name="email" placeholder='Correo electrónico' />
                <input type="password" {...register('password')} name="password" placeholder='Contraseña' />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default SignIn;