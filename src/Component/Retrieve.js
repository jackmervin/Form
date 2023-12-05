import React from "react";
import { useState, useEffect } from "react";
import Error from "./Error";

function Retrieve(props) {
  const [getData, setDate] = useState([]);
  const [retrive, setrive] = useState([]);
  const [error, seterrop] = useState(false);
  const [errorRetrieve, setRetrieve] = useState(false);
  //Handle sideEffect to add the deleted array
  useEffect(() => {
    Object.entries(props.datas).length > 0 &&
      setDate(() => {
        return [...getData, ...props.datas];
      });
  }, [props.datas]);
  // Handle Delete
  const HandleDelete = (e) => {
    const hasError = Number(e.target.id) === Number(e.target.value);
    if (hasError) {
      seterrop(true);
    } else {
      if (Number(e.target.id) === Number(e.target.value)) {
        return setDate(
          getData.filter((val) => {
            return val.id !== Number(e.target.value);
          })
        );
      }
    }
  };
  //Handle Ritrieve
  const HandleRitrive = (e) => {
    const hasError = Number(e.target.id) === Number(e.target.value);
    if (hasError) {
      setRetrieve(true);
    } else {
      if (Number(e.target.id) === Number(e.target.value)) {
        setrive(
          getData.filter((val) => {
            return val.id === Number(e.target.value);
          })
        );
      }

      setDate(
        getData.filter((val) => {
          return val.id !== Number(e.target.value);
        })
      );
    }
  };
  useEffect(() => {
    Object.entries(retrive).length > 0 && props.HandleRitrive(retrive);
  }, [retrive]);

  //Handle Error Handle
  const HandleYesorNo = (confirmaed, e, data) => {
    if (data === "error") {
      if (confirmaed) {
        seterrop(false);
        if (Number(e.target.id) === Number(e.target.value)) {
          return setDate(
            getData.filter((val) => {
              return val.id !== Number(e.target.value);
            })
          );
        }
      } else {
        seterrop(false);
      }
    } else {
      if (confirmaed) {
        setRetrieve(false);
        if (Number(e.target.id) === Number(e.target.value)) {
          setrive(
            getData.filter((val) => {
              return val.id === Number(e.target.value);
            })
          );
        }

        setDate(
          getData.filter((val) => {
            return val.id !== Number(e.target.value);
          })
        );
      } else {
        setRetrieve(false);
      }
    }
  };
  return (
    <>
      {Object.entries(getData).length > 0 && (
        <div>
          <h4>RETRIVE DATA</h4>
          <div className="t">
            <div className="tablef">
              <div className="th">ID</div>
              <div className="th">Name</div>
              <div className="th">Gender</div>
              <div className="th">Location</div>
              <div className="th">Action</div>
            </div>
            {getData &&
              getData.map((todo, key) => (
                <div className="tablef2" key={key}>
                  <div className="td">{todo.id}</div>
                  <div className="td">{todo.Name}</div>
                  <div className="td">{todo.Gender}</div>
                  <div className="td">{todo.Location}</div>
                  <div className="td" style={{ display: "flex", gap: "5px" }}>
                    <button
                      className="edit-btn"
                      id={todo.id}
                      value={todo.id}
                      onClick={HandleRitrive}
                    >
                      {" "}
                      Retrieve
                    </button>

                    <button
                      className="delete-btn"
                      id={todo.id}
                      value={todo.id}
                      onClick={HandleDelete}
                    >
                      Delete
                    </button>
                  </div>
                  {error && (
                    <Error
                      id={todo.id}
                      message={"Are you sure you want to delete"}
                      HandleYesorNo={HandleYesorNo}
                      name={"error"}
                    />
                  )}
                  {errorRetrieve && (
                    <Error
                      id={todo.id}
                      message={`Are you sure you want to Retrieve ${todo.id}th Id data `}
                      HandleYesorNo={HandleYesorNo}
                      name={"retrieve"}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Retrieve;
