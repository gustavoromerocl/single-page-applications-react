import {BrowserRouter, Routes, Route} from 'react-router-dom';

let NotImplemented = () => {
  return <h1>Esta página aún no está disponible</h1>
}

let HolaIndex = () => {
  return <h1>Hola index</h1>
}

let HolaVideos = () => {
  return <h1>Hola vídeos</h1>
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HolaIndex/>}/>
          <Route path="/videos" element={<HolaVideos/>}/>
        </Routes>

        <Routes>
          <Route path="/" element={<NotImplemented/>}/>
          <Route path="/usuarios/registro" element={<NotImplemented/>}/>
          <Route path="/usuarios/login" element={<NotImplemented/>}/>

          <Route path="/usuarios/:id" element={<NotImplemented/>}/>
          <Route path="/usuarios/:id/videos" element={<NotImplemented/>}/>

          <Route path="/videos" element={<NotImplemented/>}/>
          <Route path="/videos/nuevo" element={<NotImplemented/>}/>
          <Route path="/videos/:id" element={<NotImplemented/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
