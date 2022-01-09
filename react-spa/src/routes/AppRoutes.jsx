import React from 'react'
import SignIn from '../users/SignIn';
import SignUp from '../users/SignUp';
import Videos from '../videos/Videos';
import VideosForm from '../videos/VideosForm';
import { VideoShow } from '../videos/VideoShow';
import { Profile } from '../users/Profile';
import { Home } from '../Home';
import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';


let NotImplemented = () => {
    return (
      <>
        <Link to="/videos">Ir a videos</Link>
        <br />
        <a href='/videos'>Ir a video tradicional</a>
        <h1>Esta página aún no está disponible</h1>
      </>
    )
  }
  
  let Error404 = () => {
    return (
      <>
        <Link to="/">Regresar al inicio</Link>
        <br />
        <h1>Recurso no encontrado - 404</h1>
      </>
    )
  }

const AppRoutes = () => {
    let user = useSelector(state => state.user.user);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />

            <Route path="/usuarios" element={user ? <Navigate to="/videos"/> : <Outlet />}>
                <Route path="registro" element={<SignUp />} />
                <Route path="login" element={<SignIn />} />
            </Route>

            <Route path="" element={user ? <Outlet /> : <Navigate to="/usuarios/login"/>}>
                <Route path="usuarios/miperfil" element={<Profile />} />
                <Route path="usuarios/:id/videos" element={<NotImplemented />} />

                <Route path="/videos">
                    <Route path="" element={<Videos />} />
                    <Route path="nuevo" element={<VideosForm />} />
                    <Route path=":id" element={<VideoShow />} />
                </Route>
            </Route>

        </Routes>
    )
}

export default AppRoutes
