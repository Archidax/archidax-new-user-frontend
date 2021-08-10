import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { getLoginHistory, deleteLogItem } from "../../stores/index";
import moment from "moment";
import Translate from "../../i18n/Translate";
import Pagination from "react-js-pagination";

function LayananAktif() {
  const loginHistory = useSelector(
    (state) => state.keamananReducer.loginHistory
  );
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLoginHistory(dispatch);
  }, [dispatch]);

  const deleteItem = (id) => {
    setLoading(id);
    deleteLogItem(id, dispatch, setLoading);
  };

  // pagination
  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(10);
  // Get Current post
  const indexOfLastPost = page * limit;
  const indexOfFirstPost = indexOfLastPost - 10;
  const currentPosts = loginHistory.slice(indexOfFirstPost, indexOfLastPost);
  const totalDocs = loginHistory.length;
  return (
    <div>
      {/* <p>{JSON.stringify(loginHistory)}</p> */}
      <p className="label-title-top">{Translate("ka_layanan_aktif")}</p>
      <div className="table-responsive">
        <table className="table label-title">
          <thead className="font-bold">
            <th>{Translate("ka_alamat_ip")}</th>
            <th>{Translate("ka_perangkat")}</th>
            <th>{Translate("ka_terakhir_login")}</th>
            <th>{Translate("rw_aksi")}</th>
          </thead>
          <tbody>
            {loginHistory.length > 0 ? (
              currentPosts.map((el) => {
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
                  {Translate("ka_text_no_history_login")}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {loginHistory.length > 0 && (
        <Pagination
          itemClass="page-item-custom-pagination"
          linkClass="page-link-custom-pagination"
          activeClass="active-item-custom-pagination"
          activeLinkClass="active-link-custom-pagination"
          activePage={page}
          itemsCountPerPage={limit}
          pageRangeDisplayed={5}
          totalItemsCount={totalDocs}
          onChange={(e) => setPage(e)}
          prevPageText={<i class="fas fa-angle-left"></i>}
          nextPageText={<i class="fas fa-angle-right"></i>}
          firstPageText={<i class="fas fa-angle-double-left"></i>}
          lastPageText={<i class="fas fa-angle-double-right"></i>}
        />
      )}
    </div>
  );
}

export default LayananAktif;
