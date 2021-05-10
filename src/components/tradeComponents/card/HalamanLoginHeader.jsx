import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function IsLoginPasar({ children, BlockPage }) {
  const isLoginPages = useSelector((state) => state.userReducer.isLogin);

  if (isLoginPages) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return (
    <div style={{ alignItems: "center" }}>
      <div className="mx-3">
        <Link to="/login">
          <h6 className="mb-0 text-white font-15">Masuk</h6>
        </Link>
      </div>
    </div>
  );
}
