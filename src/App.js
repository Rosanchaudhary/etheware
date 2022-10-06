import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./components/NavBar/NavBar";
import OrganizationName from "./pages/OrganizationName/OrganizationName";
import CreateProject from "./pages/CreateProject/CreateProject";
import DomainName from "./pages/DomainName/DomainName";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import SignupScreen from './pages/SignupScreen/SignupScreen'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/domain-name" element={<DomainName />} />
        <Route path="/name" element={<OrganizationName />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<SignupScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
