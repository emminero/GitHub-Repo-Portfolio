import React from "react";
import { Link } from "react-router-dom";

const Erro404 = () => {
  return (
    <div className="error404">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to='/' className="btn">Go back to Home</Link>
    </div>
  );
};

export default Erro404;