import React from 'react'
import { useDispatch } from 'react-redux'
import { ClearButton } from '../theme'
import { logOut } from '../store/user'

export const LogOutButton = (props) => {
    let disptach = useDispatch();

    let logOutUser = () => {
        disptach(
            logOut()
        )
    }
    //Si no se pasan las props, styled component no puede estilizar los componentes funcionales
    return (
        <ClearButton className={props.className} onClick={logOutUser}>
            Cerrar sesión
        </ClearButton>
    )
}

