import "./App.css";
import { Outlet } from "react-router-dom";

//Este componente pertenece a la ruta "principal, la ruta que engloba al resto.
//Permite cargar un Navbar y un footer que se vea en cada una de las rutas.
//Las subrutas cargaran su contenido dentro de una sección determinada de esta ruta. "Entre el navbar y el footer"
function App() {
  return (
    <div className="App">
      {/** Permite visualizar las sub-rutas que están dentro de esta ruta  **/}
      <Outlet />
    </div>
  );
}

export default App;
