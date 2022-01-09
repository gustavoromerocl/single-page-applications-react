import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../store/user'
import UserFormLayout from './UserFormLayout';

let SignUp = (props) => {
    let dispatch = useDispatch();

    let doSignUp = () => {
        dispatch(
            signUp({
                credentials: {
                    email: 'gustandresrp@gmail.com',
                    jwtToken: 'daskjdh453kjsldkj%&4',
                    password: '123456',
                    username: 'romero'
                }
            })
        )
    }

    return(
        <div>
            {   
                <>
                <UserFormLayout />
                <button onClick={doSignUp}>Ingresar</button>
                </>
            }
        </div>
    )
}

export default SignUp;