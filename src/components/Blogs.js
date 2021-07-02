import React from "react";

function Blogs() {
  return (
    <div className="container card" id="blogs">
      <h5 className="lead text-center my-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-vector-pen"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"
          />
          <path
            fillRule="evenodd"
            d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"
          />
        </svg>{" "}
        Our Blogs
      </h5>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 order-md-last">
            <img
              src={process.env.PUBLIC_URL + "/blog1.jpg"}
              className="img-fluid rounded-start"
              alt="..."
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="col-md-8" style={{ backgroundColor: "#f5f5f5" }}>
            <div className="card-body">
              <h5 className="card-title">
                IBM Quantum Challenge 2021 — Part 3
              </h5>
              <p className="card-text">
                We show our solution with the lowest cost possible for the
                Variational Quantum Eigensolver problem in the IBM Quantum
                Challenge 2021. This algorithm is a realization of physicist
                Richard Feynman’s dream of simulating large and complex
                molecules.
              </p>
              <p className="card-text">
                <small className="text-muted">- Minh Pham</small>
              </p>

              <a
                href="https://medium.com/quantum-untangled/ibm-quantum-challenge-2021-part-3-d3692cf6dfb3"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={process.env.PUBLIC_URL + "/blog2.jpg"}
              className="img-fluid rounded-start"
              alt="..."
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="col-md-8" style={{ backgroundColor: "#f5f5f5" }}>
            <div className="card-body">
              <h5 className="card-title">Teleportation — the quantum style</h5>
              <p className="card-text">
                Quantum teleportation step for step! Explore an implementation
                of the protocol using Qiskit and the implications of this
                algorithm in physics and how it is relevant to quantum
                computing.
              </p>
              <p className="card-text">
                <small className="text-muted">- Emilio Peláez</small>
              </p>

              <a
                href="https://medium.com/quantum-untangled/teleportation-protocol-1cdaa86ca40f"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="container">
    //   <div className="card mb-3">
    //     <div className="row g-0">
    //       <div className="col-md-4">
    //         <img
    //           src="./workshop.jpg"
    //           className="img-fluid rounded-start"
    //           alt="..."
    //           style={{
    //             height: "100%",
    //             width: "100%",
    //           }}
    //         />
    //       </div>
    //       <div className="col-md-8">
    //         <div className="card-body">
    //           <h5 className="card-title lead">Our Blogs</h5>

    //           <div className="row d-flex justify-content-between">
    //             <div className="card col-md-5 p-0  my-5">
    //               <h5 className="card-header">
    //                 IBM Quantum Challenge 2021 — Part 3
    //               </h5>
    //               <div className="card-body">
    //                 <small className="card-title">- Minh Pham</small>
    //                 <p className="card-text">
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
    //   className="btn btn-primary"
    // >
    //   Read More
    // </a>
    //               </div>
    //             </div>

    //             <div className="card col-md-5 p-0  my-5">
    //               <h5 className="card-header">Teleportation — the quantum style</h5>
    //               <div className="card-body">
    //                 <small className="card-title">- Emilio Peláez</small>
    //                 <p className="card-text">
    //                   Quantum teleportation step for step! Explore an
    //                   implementation of the protocol using Qiskit and the
    //                   implications of this algorithm in physics and how it is
    //                   relevant to quantum computing.
    //                 </p>
    // <a
    //   href="https://medium.com/quantum-untangled/teleportation-protocol-1cdaa86ca40f"
    //   target="_blank"
    //   rel="noopener noreferrer"
    //   className="btn btn-primary"
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
