import React from "react";

function WhatWeDo() {
  return (
    <div className="container my-5">
      <span className="d-block text-center h4 pt-2">What We Do</span>
      <div className="row py-1 ">
        <div className="card py-2 col-6 col-md-3" style={{ widthMax: "18rem" }}>
          <img src="./whatwedo2.jpg" class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title">Projects</h5>
          </div>
        </div>

        <div className="card py-2 col-6 col-md-3" style={{ Max: "18rem" }}>
          <img src="./whatwedo2.jpg" class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title">Paper Discussions</h5>
          </div>
        </div>

        <div className="card py-2 col-6 col-md-3" style={{ Max: "18rem" }}>
          <img src="./whatwedo2.jpg" class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title">Workshops</h5>
          </div>
        </div>

        <div className="card py-2 col-6 col-md-3" style={{ Max: "18rem" }}>
          <img src="./whatwedo2.jpg" class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title">Blog</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
