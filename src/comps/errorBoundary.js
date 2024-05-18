import React, { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="error-page">
          <h1>ERROR!</h1>
          <h2>Something went wrong.</h2>
          <Link
            to="/"
            className="btn"
            style={{
              backgroundColor: "#ce7406",
              display: "block",
              width: "150px",
              margin: "20px auto",
              textDecoration: "none",
            }}
          >
            Go back to Home
          </Link>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
