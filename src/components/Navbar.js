import React from "react";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        style={{ opacity: "0.85" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Eigensolvers
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("teqs").scrollIntoView(true);
                  }}
                >
                  Workshops
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("blogs").scrollIntoView(true);
                  }}
                >
                  Blogs
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("about").scrollIntoView(true);
                  }}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
