import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//Importamos los módulos necesarios de React-Router-DOM:
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductosRoute from "./routes/ProductosRoute";
import RegisterRoute from "./routes/RegisterRoute";
import HomeRoute from "./routes/HomeRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/**Envolvemos toda la aplicación dentro del browser **/}
    <BrowserRouter>
      {/** Envolvemos cada una de las rutas dentro del "routes"  **/}
      <Routes>
        {/** Creamos cada una de las rutas que vamos a usar en el proyecto:**/}
        {/*La ruta  "madre" es la ruta que va a englobar a todas, permite añadir sub rutas dentro de la misma */}
        <Route path="/" element={<App />}>
          {/*Dentro de esta etiqueta vamos a crear el resto de las rutas, estas van a estar englobadas por la ruta madre "App" */}
          <Route index element={<HomeRoute />} />
          <Route path="/productos" element={<ProductosRoute />} />
          <Route path="/register" element={<RegisterRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
