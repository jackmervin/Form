import React from "react";
import "./Error.css";

function UpdateError(props) {
  const HandleUpdateE = (confirmaed) => {
    props.HandleUpdateE(confirmaed);
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
                onClick={(e) => HandleUpdateE(true, e)}
              >
                Yes
              </button>
              <button className="btn2" onClick={() => HandleUpdateE(false)}>
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateError;
