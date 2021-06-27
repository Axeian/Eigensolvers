import React from "react";

function HeroHeader() {
  return (
    // <div class="card bg-dark text-white">
    //   <img src="./board2.jpg" class="card-img" alt="..." />
    //   <div
    //     class="card-img-overlay container text-center"
    //     style={{ marginTop: "40px" }}
    //   >
    //     <h5 class="card-title lead display-3">
    //       <strong>THE EIGENSOLVERS</strong>
    //     </h5>
    //     <p class="card-text display-5">
    // Four guys who met on Reddit come together to learn and explore various
    // aspects of Quantum Computing and expand the QC commumity
    //     </p>
    //   </div>
    // </div>

    <header
      style={{
        position: "relative",
        width: "100%",
        height: "720px",
        overflow: "hidden",
        background:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(./board2.jpg) no-repeat fixed ",
      }}
      className="row justify-content-center align-items-center"
    >
      {/* <img
        src="./board2.jpg"
        style={{ objectFit: "cover", opacity: "0.4" }}
        alt="..."
      /> */}
      <section
        style={{
          color: "black",
          fontFamily: "helvetica",
        }}
        className="col-md-9"
      >
        {/* <h1 className="display-2" style={{ fontFamily: "helvetica" }}>
          <strong>THE EIGENSOLVERS</strong>
        </h1> */}

        <div
          class="card"
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "none",
          }}
        >
          <div class="row g-0">
            <div class="col-sm-3">
              <img
                src="./logo192.png"
                class="img-fluid rounded-start"
                alt="..."
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
            <div class="col-sm-9">
              <div class="card-body">
                <h2 class="card-title lead display-3">THE EIGENSOLVERS</h2>
                <p class="card-text lead">
                  Four guys who met on Reddit, come together to learn and
                  explore various aspects of Quantum Computing and expand the QC
                  commumity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default HeroHeader;
