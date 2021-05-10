import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { getLoginHistory, deleteLogItem } from "../../stores/index";
import moment from "moment";

function LayananAktif() {
  const loginHistory = useSelector(
    (state) => state.keamananReducer.loginHistory,
  );
  const dispatch = useDispatch();
  // const history = useHistory();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLoginHistory(dispatch);
  }, [dispatch]);

  const deleteItem = (id) => {
    setLoading(id);
    deleteLogItem(id, dispatch, setLoading);
  };

  return (
    <div>
      {/* <p>{JSON.stringify(loginHistory)}</p> */}
      <p className="label-title-top">Layanan Aktif</p>
      <table className="table label-title">
        <thead className="font-bold">
          <th>Alamat IP</th>
          <th>Perangkat</th>
          <th>Terakhir Login</th>
          <th>Aksi</th>
        </thead>
        <tbody>
          {loginHistory.length > 0 ? (
            loginHistory.map((el) => {
              return (
                <tr>
                  <td>{el.ip}</td>
                  <td>
                    {el.browser} {el.platform}
                  </td>
                  <td>
                    {moment(el.lastLoginAt).format("DD MMMM YYYY, h:mm:ss A")}
                  </td>
                  <td className="d-flex justify-content-center">
                    {loading ? (
                      el._id === loading ? (
                        <div
                          class="spinner-border spinner-border-sm text-danger"
                          role="status"
                        >
                          <span class="sr-only">Loading...</span>
                        </div>
                      ) : (
                        <i
                          class="fas fa-window-close text-warning"
                          style={{ cursor: "pointer" }}
                        ></i>
                      )
                    ) : (
                      <i
                        class="fas fa-window-close text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteItem(el._id)}
                      ></i>
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="text-center" colSpan="4">
                Anda tidak punya history login akhir-akhir ini.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LayananAktif;
