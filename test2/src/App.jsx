import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/find" element={<FindPage />} />
        <Route path="/all" element={<AllPage />} />
      </Routes>
    </main>
  );
};

export default App;
