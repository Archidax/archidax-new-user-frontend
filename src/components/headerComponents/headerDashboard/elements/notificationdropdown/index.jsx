import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

import {
  getNotifications,
  getMoreNotifications,
  setReadNotifications,
  readAllNotifications,
} from "../../../../../stores";
import { parseDate, parseTime } from "../../../../../helpers";

import Translate from '../../../../../i18n/Translate';

function NotificationDropdownHeader() {
  const { notifications, hasNext, unreads } = useSelector(
    (state) => state.notificationReducer,
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const { mode } = useSelector((state) => state.daynightReducer);
  const [loading, setLoading] = useState(false);
  const [mode2, setMode2] = useState(Translate('hd_semua'));
  const [filteredNotification, setFilteredNotification] = useState([]);
  const [loadingDelete, setLoadingDelete] = useState(null);
  const [showDelete, setShowDelete] = useState("");

  const handleShowDelete = (itemIndex) => {
    setShowDelete(itemIndex);
  };

  const clearShowDelete = () => {
    setShowDelete("");
  };

  const handleDelete = (e, itemIndex) => {
    setLoadingDelete(itemIndex);
    preventDropdownClose(e);
    setTimeout(() => {
      setLoadingDelete(null);
    }, 5000);
  };

  const preventDropdownClose = (e) => {
    e.stopPropagation();
  };

  const toggleMode2 = (e) => {
    preventDropdownClose(e);
    setMode2(mode2 === Translate('hd_semua') ? Translate('hd_baru') : Translate('hd_semua'));
  };

  const handleReadAll = (e) => {
    preventDropdownClose(e);
    readAllNotifications(dispatch);
  };

  const handleReadMore = (e) => {
    preventDropdownClose(e);
    if (!loading) {
      setLoading(true);
      getMoreNotifications(dispatch, notifications.length, setLoading);
    }
  };

  useEffect(() => {
    getNotifications(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (mode2 === "Baru") {
      setFilteredNotification(notifications);
    } else {
      let selected = notifications.filter((item) => item.read === false);
      setFilteredNotification(selected);
    }
  }, [mode2, notifications]);

  return (
    <div className="btn-group ml-sm-3 ml-0 mr-sm-3 mr-0">
      <div
        className="ci-notif-btn d-flex justify-content-center"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i
          className="fas fa-bell d-flex align-items-center font-25"
          style={{ color: "#AEB4CE" }}
        ></i>
        {unreads > 0 && (
          <span className="counter text-white rounded bg-danger">
            {unreads}
          </span>
        )}
      </div>
      <div
        className="dropdown-menu dropdown-menu-right ci-dropdown-notification pt-0 pb-0"
        aria-labelledby="dropdownMenuButton"
        style={{
          backgroundColor: mode ? "" : "white",
          // border: mode ? "1px solid white" : "1px solid black",
        }}
      >
        <div
          onClick={(e) => preventDropdownClose(e)}
          className="container-fluid"
          style={{ background: "#F9BA42", borderRadius: "4px 4px 0 0" }}
        >
          <div className="w-100">
            <div className="row">
              <div className="col py-2">
                <p className="text-dark font-weight-bold mb-0 lable-title font-12">
                  {Translate('hd_notifikasi')}
                </p>
              </div>
              <div
                onClick={(e) => toggleMode2(e)}
                className="btn btn-sm col-2 py-2 text-center"
              >
                <p className="text-secondary font-weight-bold mb-0 lable-title font-11">
                  {mode2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid m-0 p-0 ci-dropdown-notification-scrollbar">
          {filteredNotification && filteredNotification.length ? (
            <>
              {filteredNotification.map((items, itemIndex) => {
                let text = {};
                if (!items.read) {
                  text.class = "text-white";
                } else {
                  text.class = `text-secondary`;
                }
                return (
                  <div
                    key={itemIndex}
                    onMouseOver={() => handleShowDelete(itemIndex)}
                    onMouseLeave={() => clearShowDelete()}
                    onClick={() =>
                      setReadNotifications(dispatch, items, history)
                    }
                    className="row col-12 ci-dropdown-notification-scrollbar-row py-3 px-0 m-0"
                  >
                    <div className="col-12 col-md-12">
                      <div>
                        {!items.read && (
                          <span className="counter text-white rounded bg-danger mr-2">
                            {Translate('hd_baru')}
                          </span>
                        )}
                        {showDelete === itemIndex ? (
                          loadingDelete === itemIndex ? (
                            <div
                              className="counter spinner-border spinner-border-sm text-warning mr-2"
                              role="status"
                            >
                              <span className="sr-only">Loading...</span>
                            </div>
                          ) : (
                            <span
                              onClick={(e) => handleDelete(e, itemIndex)}
                              className="counter text-white rounded bg-danger mr-2"
                            >
                              X
                            </span>
                          )
                        ) : (
                          <></>
                        )}
                      </div>
                      <h6
                        className={`${text.class} text-justify lable-title mb-0`}
                      >
                        {items.title}
                      </h6>
                      <p
                        className={`text-secondary font-14 text-justify lable-title mb-0`}
                      >
                        {ReactHtmlParser(items.text)}
                      </p>
                    </div>
                    <div
                      className="col-12 col-md-12 mt-1 font-12"
                      style={{ color: "#888888" }}
                    >
                      <i className="fas fa-calendar-alt" />{" "}
                      <span className="font-12">
                        {parseDate(items.createdAt)} /{" "}
                        {parseTime(items.createdAt)}{" "}
                      </span>
                    </div>
                  </div>
                );
              })}
              {hasNext && mode2 !== "Semua" && (
                <button
                  onClick={(e) => handleReadMore(e)}
                  className="btn btn-dark btn-sm col-12 col-md-12"
                >
                  {loading ? (
                    <div
                      className="spinner-border spinner-border-sm text-warning mr-2"
                      role="status"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <p className="text-white font-14 text-center lable-title mb-0">
                      {Translate('hd_lebih_banyak')}
                    </p>
                  )}
                </button>
              )}
            </>
          ) : (
            <div className="row py-3 px-0 m-0 col-12">
              <div className="col-12 col-md-12">
                <p className="text-white font-14 text-center lable-title mb-0">
                  {Translate('hd_tidak_ada_notifikasi_baru')}
                </p>
              </div>
            </div>
          )}
        </div>
        {unreads ? (
          <div
            onClick={(e) => handleReadAll(e)}
            className="btn btn-sm container-fluid"
            style={{ background: "#F9BA42", borderRadius: "0 0 4px 4px" }}
          >
            <div className="w-100">
              <div className="row">
                <div className="col-12 col-md-12 py-2 text-center">
                  <p className="text-dark font-weight-bold mb-0 lable-title font-12">
                    {Translate('hd_tandai_semua_telah_dibaca')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default NotificationDropdownHeader;

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import ReactHtmlParser from "react-html-parser";

// import {
//   getNotifications,
//   getMoreNotifications,
//   setReadNotifications,
//   readAllNotifications,
// } from "../../../../../stores";
// import { parseDate, parseTime } from "../../../../../helpers";

// function NotificationDropdownHeader() {
//   const { notifications, hasNext, unreads } = useSelector(
//     (state) => state.notificationReducer,
//   );
//   const { mode } = useSelector((state) => state.daynightReducer);
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const [loading, setLoading] = useState(false);
//   const [mode, setMode] = useState("Semua");
//   const [filteredNotification, setFilteredNotification] = useState([]);
//   const [loadingDelete, setLoadingDelete] = useState(null);
//   const [showDelete, setShowDelete] = useState("");

//   const handleShowDelete = (itemIndex) => {
//     setShowDelete(itemIndex);
//   };

//   const clearShowDelete = () => {
//     setShowDelete("");
//   };

//   const handleDelete = (e, itemIndex) => {
//     setLoadingDelete(itemIndex);
//     preventDropdownClose(e);
//     setTimeout(() => {
//       setLoadingDelete(null);
//     }, 5000);
//   };

//   const preventDropdownClose = (e) => {
//     e.stopPropagation();
//   };

//   const toggleMode = (e) => {
//     preventDropdownClose(e);
//     setMode(mode === "Semua" ? "Baru" : "Semua");
//   };

//   const handleReadAll = (e) => {
//     preventDropdownClose(e);
//     readAllNotifications(dispatch);
//   };

//   const handleReadMore = (e) => {
//     preventDropdownClose(e);
//     if (!loading) {
//       setLoading(true);
//       getMoreNotifications(dispatch, notifications.length, setLoading);
//     }
//   };

//   useEffect(() => {
//     getNotifications(dispatch);
//   }, [dispatch]);

//   useEffect(() => {
//     if (mode === "Baru") {
//       setFilteredNotification(notifications);
//     } else {
//       let selected = notifications.filter((item) => item.read === false);
//       setFilteredNotification(selected);
//     }
//   }, [mode, notifications]);

//   return (
//     <div className="btn-group ml-sm-3 ml-0 mr-sm-3 mr-0">
//       <div
//         className="ci-notif-btn d-flex justify-content-center"
//         type="button"
//         id="dropdownMenuButton"
//         data-toggle="dropdown"
//         aria-haspopup="true"
//         aria-expanded="false"
//       >
//         <i
//           className="fas fa-bell d-flex align-items-center font-25"
//           style={{ color: "#AEB4CE" }}
//         ></i>
//         {unreads > 0 && (
//           <span className="counter text-white rounded bg-danger">
//             {unreads}
//           </span>
//         )}
//       </div>
//       <div
//         className="dropdown-menu dropdown-menu-right ci-dropdown-notification pt-0 pb-0"
//         aria-labelledby="dropdownMenuButton"
//       >
//         <div
//           onClick={(e) => preventDropdownClose(e)}
//           className="container-fluid"
//           style={{ background: "#F9BA42", borderRadius: "4px 4px 0 0" }}
//         >
//           <div className="w-100">
//             <div className="row">
//               <div className="col py-2">
//                 <p className="text-dark font-weight-bold mb-0 lable-title font-12">
//                   NOTIFIKASI
//                 </p>
//               </div>
//               <div
//                 onClick={(e) => toggleMode(e)}
//                 className="btn btn-sm col-2 py-2 text-center"
//               >
//                 <p className="text-secondary font-weight-bold mb-0 lable-title font-11">
//                   {mode}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container-fluid m-0 p-0 ci-dropdown-notification-scrollbar">
//           {filteredNotification && filteredNotification.length ? (
//             <>
//               {filteredNotification.map((items, itemIndex) => {
//                 let text = {};
//                 if (!items.read) {
//                   text.class = "text-white";
//                 } else {
//                   text.class = `text-secondary`;
//                 }
//                 return (
//                   <div
//                     key={itemIndex}
//                     onMouseOver={() => handleShowDelete(itemIndex)}
//                     onMouseLeave={() => clearShowDelete()}
//                     onClick={() =>
//                       setReadNotifications(dispatch, items, history)
//                     }
//                     className="row col-12 ci-dropdown-notification-scrollbar-row py-3 px-0 m-0"
//                   >
//                     <div className="col-12 col-md-12">
//                       <div>
//                         {!items.read && (
//                           <span className="counter text-white rounded bg-danger mr-2">
//                             Baru
//                           </span>
//                         )}
//                         {showDelete === itemIndex ? (
//                           loadingDelete === itemIndex ? (
//                             <div
//                               className="counter spinner-border spinner-border-sm text-warning mr-2"
//                               role="status"
//                             >
//                               <span className="sr-only">Loading...</span>
//                             </div>
//                           ) : (
//                             <span
//                               onClick={(e) => handleDelete(e, itemIndex)}
//                               className="counter text-white rounded bg-danger mr-2"
//                             >
//                               X
//                             </span>
//                           )
//                         ) : (
//                           <></>
//                         )}
//                       </div>
//                       <h6
//                         className={`${text.class} text-justify lable-title mb-0`}
//                       >
//                         {items.title}
//                       </h6>
//                       <p
//                         className={`text-secondary font-14 text-justify lable-title mb-0`}
//                       >
//                         {ReactHtmlParser(items.text)}
//                       </p>
//                     </div>
//                     <div
//                       className="col-12 col-md-12 mt-1 font-12"
//                       style={{ color: "#888888" }}
//                     >
//                       <i className="fas fa-calendar-alt" />{" "}
//                       <span className="font-12">
//                         {parseDate(items.createdAt)} /{" "}
//                         {parseTime(items.createdAt)}{" "}
//                       </span>
//                     </div>
//                   </div>
//                 );
//               })}
//               {hasNext && mode !== "Semua" && (
//                 <button
//                   onClick={(e) => handleReadMore(e)}
//                   className="btn btn-dark btn-sm col-12 col-md-12"
//                 >
//                   {loading ? (
//                     <div
//                       className="spinner-border spinner-border-sm text-warning mr-2"
//                       role="status"
//                     >
//                       <span className="sr-only">Loading...</span>
//                     </div>
//                   ) : (
//                     <p className="text-white font-14 text-center lable-title mb-0">
//                       Lihat lebih banyak
//                     </p>
//                   )}
//                 </button>
//               )}
//             </>
//           ) : (
//             <div className="row py-3 px-0 m-0 col-12">
//               <div className="col-12 col-md-12">
//                 <p className="text-white font-14 text-center lable-title mb-0">
//                   Tidak ada notifikasi baru
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//         {unreads ? (
//           <div
//             onClick={(e) => handleReadAll(e)}
//             className="btn btn-sm container-fluid"
//             style={{ background: "#F9BA42", borderRadius: "0 0 4px 4px" }}
//           >
//             <div className="w-100">
//               <div className="row">
//                 <div className="col-12 col-md-12 py-2 text-center">
//                   <p className="text-dark font-weight-bold mb-0 lable-title font-12">
//                     Mark all as read
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <></>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NotificationDropdownHeader;
