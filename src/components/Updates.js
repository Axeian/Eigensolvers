import React from "react";

function Updates() {
  return (
    <div className="container card mb-1 mt-4">
      <h5 className="lead text-center my-3">
        Updates{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-exclamation-circle text-success"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
        </svg>
      </h5>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 order-md-last">
            <img
              src={process.env.PUBLIC_URL + "/updates.jpg"}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8" style={{ backgroundColor: "#f5f5f5" }}>
            <div className="list-group my-1 update">
              <a
                className="list-group-item list-group-item-action"
                aria-current="true"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("teqs").scrollIntoView(true);
                }}
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">
                    Workshop : <strong>The Eigensolvers Quantum School</strong>
                  </h5>
                </div>
                <p className="mb-1">
                  Learn the basics of Quantum Computing and more!
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-calendar-event"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                {"  "}
                <small>July 5 to 11, 2021</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="container card my-1" style={{ maxWidth: "500px" }}>
    //   <span className="d-block text-center h4 pt-2 lead">
    // Updates{" "}
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="16"
    //   height="16"
    //   fill="currentColor"
    //   className="bi bi-exclamation-circle"
    //   viewBox="0 0 16 16"
    //   className="text-success"
    // >
    //   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    //   <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
    // </svg>
    //   </span>
    //   <div className="list-group my-1">
    //     <a
    //       href="#"
    //       className="list-group-item list-group-item-action"
    //       aria-current="true"
    //     >
    //       <div className="d-flex w-100 justify-content-between">
    //         <h5 className="mb-1">
    //           Workshop : <strong>The Eigensolvers Quantum School</strong>
    //         </h5>
    //       </div>
    //       <p className="mb-1">Learn the basics of Quantum Computing and more!</p>
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="16"
    //   height="16"
    //   fill="currentColor"
    //   className="bi bi-calendar-event"
    //   viewBox="0 0 16 16"
    // >
    //   <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
    //   <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
    // </svg>
    // {"  "}
    // <small>July 5 to 11, 2021</small>
    //     </a>
    //   </div>
    // </div>
  );
}

export default Updates;
