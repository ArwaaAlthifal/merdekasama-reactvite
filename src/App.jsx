import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import Homepage from "./pages/Homepage";
import Profil from "./pages/Profil";
import Portofolio from "./pages/Portofolio";
import Kontak from "./pages/Kontak";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/profil" Component={Profil} />
        <Route path="/portofolio" Component={Portofolio} />
        <Route path="/kontak" Component={Kontak} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
