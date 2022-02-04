import { useMoralis } from "react-moralis";
import Home from "./pages/HomePage";
import Dashboard from "./pages/Dashboard/profile";
import CreateItem from "pages/Dashboard/create-item";
import Subscribers from "pages/Dashboard/subscribers";
import CreatorItems from "pages/Dashboard/items";
import CreatorPage from "pages/CreatorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.scss";

function App() {
  const { authenticate, isAuthenticated, user } = useMoralis();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="dashboard" exact element={<Dashboard />} />
        <Route path="dashboard/items" element={<CreatorItems />} />
        <Route path="dashboard/items/create-item" element={<CreateItem />} />
        <Route path="dashboard/subscribers" element={<Subscribers />} />
        <Route path="/:name" element={<CreatorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
