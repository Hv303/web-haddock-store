import React from "react";
import "../style/NavbarComponent.css"; // Import CSS untuk styling

function NavbarComponent() {
  return (
   
    <nav className="navbar navbar-expand-lg navbar-light navbar-transparent">
      <div className="container">
        {/* Bagian Kiri: Nama Store dan Icon */}
        <a className="navbar-brand" href="#">
          <i className="fas fa-store"></i> My Store
        </a>

        {/* Tombol Toggle untuk Responsive Navbar */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Bagian Kanan: Link Home, About, Buy */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#buy">
                Buy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   
  );
}

export default NavbarComponent;
