import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useLocation
} from 'react-router-dom';

import {
  Provider
} from 'react-redux';

import { store } from './store';
import SignIn from './users/SignIn';

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
  return (
    <>
      <p>Hola desde usuarios</p>
      <Outlet />
    </>
  )
}

let VideoShow = () => {
  //let params = useParams();  hook que recibe los params en el path del routing
  let { id, wildcard } = useParams(); //destructuring, extrae el valor del objeto json
  console.log(id, wildcard);

  let location = useLocation();
  console.log(location.search);

  //http://localhost:3000/videos/15/20?nombre=Gustavo&apellido=Romero
  let queryParams = new URLSearchParams(location.search);
  console.log(queryParams);

  //de esta forma pordemos obtener los params recibidos como objetos tipo hash con clave y valor
  for (let p of queryParams) {
    //console.log(p)
    console.log(p[0]);
    console.log(p[1]);
  };


  return (
    <p>{id}</p>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<NotImplemented />} />
            <Route path="*" element={<Error404 />} />

            <Route path="/usuarios" element={<UsuariosOutlet />}>
              <Route path="registro" element={<NotImplemented />} />
              <Route path="login" element={<SignIn />} />
              <Route path=":id" element={<NotImplemented />} />
              <Route path=":id/videos" element={<NotImplemented />} />
            </Route>

            <Route path="/videos">
              <Route path="" element={<NotImplemented />} />
              <Route path="nuevo" element={<NotImplemented />} />
              <Route path=":id" element={<NotImplemented />} />
              <Route path=":id/:wildcard" element={<VideoShow />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
