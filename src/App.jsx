import Home from "./Home";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
