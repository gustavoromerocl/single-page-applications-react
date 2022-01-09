import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useLocation,
  useNavigate
} from 'react-router-dom';

import {
  Provider, useDispatch, useSelector
} from 'react-redux';

import { persistor, store } from './store';
import { logOut } from './store/user';
import SignIn from './users/SignIn';
import { PersistGate } from 'redux-persist/integration/react';
import SignUp from './users/SignUp';
import Videos from './videos/Videos';
import VideosForm from './videos/VideosForm';
import { VideoShow } from './videos/VideoShow';
import { Profile } from './users/Profile';
import { Home } from './Home';
import { ThemeProvider } from 'styled-components';
import theme, { GlobalStyles } from './theme';
import Layout from './components/Layout';

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

let UsuariosOutlet = () => {
  let user = useSelector(state => state.user.user)
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let doLogOut = () => {
    dispatch(
      logOut()
    )
    navigate('/usuarios/login');
  }

  return (
    <>
      {
        user && <button onClick={doLogOut}>Cerrar sesión</button>
      }
      <Outlet />
    </>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<Error404 />} />

                  <Route path="/usuarios" element={<UsuariosOutlet />}>
                    <Route path="registro" element={<SignUp />} />
                    <Route path="login" element={<SignIn />} />
                    <Route path="miperfil" element={<Profile />} />
                    <Route path=":id/videos" element={<NotImplemented />} />
                  </Route>

                  <Route path="/videos">
                    <Route path="" element={<Videos />} />
                    <Route path="nuevo" element={<VideosForm />} />
                    <Route path=":id" element={<VideoShow />} />
                  </Route>
                </Routes>
              </Layout>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
