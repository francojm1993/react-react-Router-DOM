import "./App.css";
import RegisterRoute from "./routes/RegisterRoute";
import ProductosRoute from "./routes/ProductosRoute";

function App() {
  return (
    <div className="App">
      <RegisterRoute />
      <hr />
      <ProductosRoute />
    </div>
  );
}

export default App;
