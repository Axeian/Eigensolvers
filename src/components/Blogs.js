import React from "react";

function Blogs() {
  return (
    <div className="container card">
      <h5 className="lead text-center my-3">Our Blogs</h5>

      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4 order-md-last">
            <img src="./blog1.jpg" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8" style={{ backgroundColor: "#f5f5f5" }}>
            <div class="card-body">
              <h5 class="card-title">IBM Quantum Challenge 2021 — Part 3</h5>
              <p class="card-text">
                We show our solution with the lowest cost possible for the
                Variational Quantum Eigensolver problem in the IBM Quantum
                Challenge 2021. This algorithm is a realization of physicist
                Richard Feynman’s dream of simulating large and complex
                molecules.
              </p>
              <p class="card-text">
                <small class="text-muted">- Minh Pham</small>
              </p>

              <a
                href="https://medium.com/quantum-untangled/ibm-quantum-challenge-2021-part-3-d3692cf6dfb3"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="./blog2.jpg" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8" style={{ backgroundColor: "#f5f5f5" }}>
            <div class="card-body">
              <h5 class="card-title">Teleportation — the quantum style</h5>
              <p class="card-text">
                Quantum teleportation step for step! Explore an implementation
                of the protocol using Qiskit and the implications of this
                algorithm in physics and how it is relevant to quantum
                computing.
              </p>
              <p class="card-text">
                <small class="text-muted">- Emilio Peláez</small>
              </p>

              <a
                href="https://medium.com/quantum-untangled/teleportation-protocol-1cdaa86ca40f"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="container">
    //   <div class="card mb-3">
    //     <div class="row g-0">
    //       <div class="col-md-4">
    //         <img
    //           src="./workshop.jpg"
    //           class="img-fluid rounded-start"
    //           alt="..."
    //           style={{
    //             height: "100%",
    //             width: "100%",
    //           }}
    //         />
    //       </div>
    //       <div class="col-md-8">
    //         <div class="card-body">
    //           <h5 class="card-title lead">Our Blogs</h5>

    //           <div className="row d-flex justify-content-between">
    //             <div class="card col-md-5 p-0  my-5">
    //               <h5 class="card-header">
    //                 IBM Quantum Challenge 2021 — Part 3
    //               </h5>
    //               <div class="card-body">
    //                 <small class="card-title">- Minh Pham</small>
    //                 <p class="card-text">
    //                   We show our solution with the lowest cost possible for the
    //                   Variational Quantum Eigensolver problem in the IBM Quantum
    //                   Challenge 2021. This algorithm is a realization of
    //                   physicist Richard Feynman’s dream of simulating large and
    //                   complex molecules.
    //                 </p>
    // <a
    //   href="https://medium.com/quantum-untangled/ibm-quantum-challenge-2021-part-3-d3692cf6dfb3"
    //   target="_blank"
    //   rel="noopener noreferrer"
    //   class="btn btn-primary"
    // >
    //   Read More
    // </a>
    //               </div>
    //             </div>

    //             <div class="card col-md-5 p-0  my-5">
    //               <h5 class="card-header">Teleportation — the quantum style</h5>
    //               <div class="card-body">
    //                 <small class="card-title">- Emilio Peláez</small>
    //                 <p class="card-text">
    //                   Quantum teleportation step for step! Explore an
    //                   implementation of the protocol using Qiskit and the
    //                   implications of this algorithm in physics and how it is
    //                   relevant to quantum computing.
    //                 </p>
    // <a
    //   href="https://medium.com/quantum-untangled/teleportation-protocol-1cdaa86ca40f"
    //   target="_blank"
    //   rel="noopener noreferrer"
    //   class="btn btn-primary"
    // >
    //   Read More
    // </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <div className="container my-5" style={{ backgroundColor: "#F5F5F5" }}>
    //   <span className="d-block text-center h4 pt-2">Our Blog</span>

    // </div>
  );
}

export default Blogs;
