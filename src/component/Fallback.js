import React from "react";
import { Link } from "react-router-dom";

function fallback({ error, resetErrorBoundary }) {
  return (
    <div className="fallback">
      <p>Omoh!!! Something went wrong o</p>
      <p style={{ color: " rgb(189, 30, 30)" }}>{error.message}</p>
      <button onClick={resetErrorBoundary}>Back to Home</button>
      <Link to="/App">App</Link>
      <Link to="/Home">Home</Link>
      <Link to="/Repo">Repo</Link>
      <Link to="/Profile">Profile</Link>
    </div>
  );
}

export default fallback;
