import React from "react";
import Translate from "../../../../i18n/Translate";

function TidakAdaData() {
  return (
    <td colspan="4" className="text-center text-ci-primary p-5">
      <div>
        <i className="fas fa-file fa-3x"></i>
      </div>
      <div className="font-bold font-14">{Translate('db_data_tidak_ditemukan')}</div>
    </td>
  );
}

export default TidakAdaData;
