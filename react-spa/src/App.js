import {
  BrowserRouter, 
  Routes, 
  Route,
  Link,
  Outlet,
  useNavigate,
  Navigate
} from 'react-router-dom';

let NotImplemented = () => {
  return (
    <>
      <Link to="/videos">Ir a videos</Link>
      <br/>
      <a href='/videos'>Ir a video tradicional</a>
      <h1>Esta página aún no está disponible</h1>
    </>
  )
  
}

let HolaIndex = () => {
  return <h1>Hola index</h1>
}

let HolaVideos = () => {
  return <h1>Hola vídeos</h1>
}

let UsuariosOutlet = () => {
  let navigate = useNavigate();

  let redirect = () => {
    navigate('/');
  }

  return (
    <>
      <button onClick={redirect}>Ir al home</button>
      <p>Hola desde usuarios</p>
      <Outlet/>
    </>
  )
}

function App() {
  const isAuth = false;
  return (
    <div className="App">
      <BrowserRouter>          
        <Routes>
          <Route path="/" element={<NotImplemented/>}/>

          <Route path="/usuarios" element={isAuth ? <Navigate to="/" /> : <UsuariosOutlet/>}>
            <Route path="registro" element={<NotImplemented/>}/>
            <Route path="login" element={<NotImplemented/>}/>
            <Route path=":id" element={<NotImplemented/>}/>
            <Route path=":id/videos" element={<NotImplemented/>}/>
          </Route>

          <Route path="/videos">
            <Route path="" element={<NotImplemented/>}/>
            <Route path="nuevo" element={<NotImplemented/>}/>
            <Route path=":id" element={<NotImplemented/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
