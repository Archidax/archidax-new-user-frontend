import React from "react";

// Import Components
import Home from "../../components/homepageComponents";

function HomePage(props) {
  return (
    <div className="min-h-100">
      <Home setLocale={props.setLocale} />
    </div>
  );
}

export default HomePage;
