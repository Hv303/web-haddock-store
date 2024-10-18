import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import MainContent from "./components/MainContent";
import CardsOwner from "./components/CardsOwner";
import FooterComponent from "./components/FooterComponent";
import Register from "./components/Register";  // Import halaman Register
import Login from "./components/Login";        // Import halaman Login

// Function to conditionally show or hide main content
const MainLayout = ({ children }) => {
  const location = useLocation();
  
  // Check if the path is '/login' or '/register'
  const hideMainContent = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {/* Show the main components if not on login or register */}
      {!hideMainContent && (
        <>
          <NavbarComponent />
          <MainContent />
          <CardsOwner />
          <FooterComponent />
        </>
      )}

      {/* Render children (Routes) */}
      {children}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <MainLayout>
          <Routes>
            {/* Route untuk halaman utama yang berisi MainContent, CardsOwner, dan Footer */}
            <Route path="/" element={
              <>
                <MainContent />
                <CardsOwner />
                <FooterComponent />
              </>
            } />

            {/* Route untuk halaman Register */}
            <Route path="/register" element={<Register />} />

            {/* Route untuk halaman Login */}
            <Route path="/login" element={<Login />} />
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
};

export default App;
