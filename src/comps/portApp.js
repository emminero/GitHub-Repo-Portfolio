import React from "react";
import PortNav from "./portNav";

const PortApp = () => {
  return (
    <section>
      <PortNav />
      <div className="info">
        <h3>
          Hi, I'm <span>Emmanuel</span>
        </h3>
        <h1>
          <span>W</span>EB <span>D</span>EVELOPER
        </h1>
        <div className="hr"></div>
      </div>
    </section>
  );
}

export default PortApp;
