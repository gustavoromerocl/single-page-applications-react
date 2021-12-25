import {
  BrowserRouter, 
  Routes, 
  Route,
  Link,
  Outlet
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
  return (
    <>
      <p>Hola desde usuarios</p>
      <Outlet/>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>          
        <Routes>
          <Route path="/" element={<NotImplemented/>}/>

          <Route path="/usuarios" element={<UsuariosOutlet/>}>
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
