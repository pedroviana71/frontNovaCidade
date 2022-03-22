import  { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Main from "./Main/Main"
import Promo from "./Promo/index"
import Destinos from "./Destino/Destinos"
import Contato from "./Contato/Contato"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<Main />} />
          <Route path="promo" element={<Promo/>}/>
          <Route path="destinos" element={<Destinos/>}/>
          <Route path="contatos" element={<Contato/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
