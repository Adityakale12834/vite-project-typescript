import { Routes, Route } from "react-router-dom";
import FirstPage from "./components/Firstpage";
import SecondPage from "./components/SecondPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/second" element={<SecondPage />} />
    </Routes>
  );
}

export default App
