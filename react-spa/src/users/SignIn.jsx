import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, signIn } from '../store'

let SignIn = (props) => {
    let dispatch = useDispatch();

    let user = useSelector(state => state.user.user)
    console.log(user);

    let doSignIn = () => {
        dispatch(
            signIn({
                email: 'gandresrp@gmail.com',
                jwtToken: 'daskjdh453kjsldkj%&4'
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