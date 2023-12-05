import React from "react";
import "./Error.css";

function Error(props) {
  const HandleYesorNo = (confirmaed, e) => {
    props.name === "error"
      ? props.HandleYesorNo(confirmaed, e, "error")
      : props.HandleYesorNo(confirmaed, e);
  };
  return (
    <>
      <div className="error">
        <div className="center">
          <div className="container">
            <div className="data">
              <p className="message">{props.message}</p>
            </div>
            <div className="btn">
              <button
                className="btn1"
                id={props.id}
                value={props.id}
                onClick={(e) => HandleYesorNo(true, e)}
              >
                Yes
              </button>
              <button className="btn2" onClick={() => HandleYesorNo(false)}>
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
