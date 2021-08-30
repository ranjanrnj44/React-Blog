import React from "react";
import { Link } from 'react-router-dom';

function Missing() {
  return (
    <main className="Missing">
      <>
      <h2>Got lost somewhere?</h2>
      <p>Don't get panic</p>
          <Link to="/">Visit the Homepage...</Link>
      </>
    </main>
  );
}

export default Missing;
