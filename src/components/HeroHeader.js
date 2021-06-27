import React from "react";

function HeroHeader() {
  return (
    <header
      style={{
        position: "relative",
        textAlign: "center",
        width: "100vw",
        height: "600px",
        background: "black",
        overflow: "hidden",
      }}
    >
      <img
        src="./board2.jpg"
        style={{ objectFit: "cover", opacity: "0.45" }}
        alt="..."
      />
      <section
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontFamily: "helvetica",
        }}
      >
        <h1 className="display-1">
          <strong>EIGENSOLVERS</strong>
        </h1>
      </section>
    </header>
  );
}

export default HeroHeader;
