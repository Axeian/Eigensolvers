import React from "react";

function Blogs() {
  return (
    <div className="container my-5" style={{ backgroundColor: "#F5F5F5" }}>
      <span className="d-block text-center h4 pt-2">Our Blog</span>

      <div className="row ">
        <div class="card col p-0 mx-5 my-5">
          <h5 class="card-header">Featured</h5>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div class="card col p-0 mx-5 my-5">
          <h5 class="card-header">Featured</h5>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
