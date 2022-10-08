import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./components/NavBar/NavBar";
import OrganizationName from "./pages/OrganizationName/OrganizationName";
import CreateProject from "./pages/CreateProject/CreateProject";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import UsersScreen from "./pages/UsersScreen/UsersScreen";
import Category from "./pages/Category/Category";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<UsersScreen />} />
        <Route path="/dashboard" element={<Category />} />
        <Route path="/domain-name" element={<CreateProject />} />
        <Route path="/name" element={<OrganizationName />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/login" element={<UsersScreen />} />
        <Route path="/register" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
