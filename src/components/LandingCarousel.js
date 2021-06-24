import React from "react";

function LandingCarousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./board2.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption">
            <h1 className="">
              <strong>EIGENSOLVERS</strong>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingCarousel;
