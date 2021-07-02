import React, { useState, useEffect } from "react";

function People() {
  // const [maxPersonCardHeight, setMaxPersonCardHeight] = useState(null);
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   console.log(isMounted);
  //   if (isMounted) {
  //     const heights = Array.from(document.querySelectorAll(".person")).map(
  //       (p) => p
  //     );
  //     console.log(heights);

  //     const offsets = Array.from(document.querySelectorAll(".person")).map(
  //       (p) => p.offsetHeight
  //     );
  //     console.log(offsets);

  //     let maxHeight = Math.max.apply(null, offsets);
  //     setMaxPersonCardHeight(maxHeight.toString() + "px");
  //   } else {
  //     setIsMounted(true);
  //   }
  // }, [isMounted]);

  return (
    <div className="container card my-2 pb-1" id="about">
      <h5 className="lead text-center my-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-people-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path
            fillRule="evenodd"
            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
          />
          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
        </svg>{" "}
        About Us
      </h5>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="card p-1 person" style={{ border: "none" }}>
            <img
              src={process.env.PUBLIC_URL + "/adam.jpeg"}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title lead">Adam Fattal</h5>
              <small className="card-text text-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bookmark"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>{" "}
                Undergrad Physics @ <em>Durham University</em>
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-1 person" style={{ border: "none" }}>
            <img
              src={process.env.PUBLIC_URL + "/emilio.jpeg"}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title lead">Emilio Peláez</h5>
              <small className="card-text text-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bookmark"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>{" "}
                Founder and Writer at <em>Quantum Untangled</em>. First place at
                the <em>IBM Quantum Challenge 2021</em>
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-1 person" style={{ border: "none" }}>
            <img
              src={process.env.PUBLIC_URL + "/mehil.jpeg"}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title lead">Mehil Agarwal</h5>
              <small className="card-text text-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bookmark"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>{" "}
                PhD CS @ <em>Portland State University</em>
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-1 person" style={{ border: "none" }}>
            <img
              src={process.env.PUBLIC_URL + "/minh.jpeg"}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title lead">Minh Pham</h5>
              <small className="card-text text-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bookmark"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>{" "}
                Undergrad CS @ <em>University of Chicago</em>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default People;
