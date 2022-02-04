import { useMoralis } from "react-moralis";
import Home from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./app.scss";

function App() {
  const { authenticate, isAuthenticated, user } = useMoralis();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
