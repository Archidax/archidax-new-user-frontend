import React from "react";
import TableComponent from "./table/TableHomepage";

export default function TableHomepage({ dataHome }) {
  return (
    <div className="container-homepage p-0 mb-hp-r">
      <TableComponent dataHome={dataHome} />
    </div>
  );
}
