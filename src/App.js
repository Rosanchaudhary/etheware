import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import Visions from "./pages/Visions/Visions";
import Navbar from "./components/NavBar/NavBar";
import LoadingScreen from "./pages/LoadingScreen/LoadingScreen";

import OrganizationName from "./pages/OrganizationName/OrganizationName";
import CreateProject from "./pages/CreateProject/CreateProject";

import DomainName from "./pages/DomainName/DomainName";
import Congratulations from "./pages/Congratulations/Congratulations";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<LoadingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/cats" element={<Visions />} />
        <Route path="/domain-name" element={<DomainName />} />
        <Route path="/name" element={<OrganizationName />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/calander" element={<Congratulations />} />
      </Routes>
    </Router>
  );
}

export default App;
