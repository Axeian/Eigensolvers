import React from "react";

function Navbar() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        style={{ opacity: "0.85" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Eigensolvers
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("teqs").scrollIntoView(true);
                  }}
                >
                  Workshops
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("blogs").scrollIntoView(true);
                  }}
                >
                  Blogs
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link active"
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
