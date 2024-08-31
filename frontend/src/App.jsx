import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { TodosContextProvider } from "./context/TodosContext";

function App() {
  return (
    <div className="App">
      <TodosContextProvider>
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TodosContextProvider>
    </div>
  );
}

export default App;
