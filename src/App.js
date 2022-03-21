import Header from "./Header";
import Outlet, { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Teste from "./Teste"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
