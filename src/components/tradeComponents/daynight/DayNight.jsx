import React from "react";
import day from "../../../assets/img/daynight/day.svg";
// import night from "../../../assets/img/daynight/night.svg";
// import day_active from "../../../assets/img/daynight/day_active.svg";
import night_active from "../../../assets/img/daynight/night_active.svg";
import { useDispatch, useSelector } from "react-redux";

export default function DayNight() {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.daynightReducer);
  const dayoff = () => {
    if (!mode) {
      dispatch({ type: "SETNIGHT" });
    }
  };
  const nightoff = () => {
    if (mode) {
      dispatch({ type: "SETDAY" });
    }
  };
  return (
    <div className="daynight" style={{ display: "flex", flexDirection: "row" }}>
      <img
        src={night_active}
        onClick={dayoff}
        alt="night_active"
        style={{
          border: mode
            ? "1px solid rgba(255, 255, 255, 0.4)"
            : "1px solid #939393",
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
          backgroundColor: mode ? "black" : "#ffffff",
        }}
      />
      {/* <a href="#" alt="$">
      </a> */}
      <img
        src={day}
        onClick={nightoff}
        alt="day"
        style={{
          border: mode
            ? "1px solid rgba(255, 255, 255, 0.4)"
            : "1px solid #3f3f3f",
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
          backgroundColor: mode ? "#ffffff" : "#00688f",
        }}
      />
      {/* <a href="#" alt="$">
      </a> */}
    </div>
  );
}
