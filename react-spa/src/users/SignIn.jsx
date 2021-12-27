import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, signUp } from '../store/user'

let SignIn = (props) => {
    let dispatch = useDispatch();

    let user = useSelector(state => state.user.user)
    console.log(user);

    let doSignIn = () => {
        dispatch(
            signUp({
                credentials: {
                    email: 'gandresrp@gmail.com',
                    password: '123456',
                    username: 'romero'
                }
            })
        )
    }

    let doLogOut = () => {
        dispatch(
            logOut()
        )
    }

    return(
        <div>
            {
                user ?
                <button onClick={doLogOut}>Cerrar sesión</button>
                :
                <button onClick={doSignIn}>Ingresar</button>
            }
        </div>
    )
}

export default SignIn;