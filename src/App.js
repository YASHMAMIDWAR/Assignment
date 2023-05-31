import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "./Components/AnimatedRoutes";

function App() {
  return (
    <>
      <div className="App">
        <h1 className="m-4">React JS CRUD Operations</h1>
      </div>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
