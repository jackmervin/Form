import React from "react";
import Error from "./Error";
function TableList(props) {
  //On Edit
  const HandleEdit = (e) => {
    props.HandleEdit(e);
  };
  //On Delete
  const HandleDelete = (e) => {
    props.onDelete(e);
  };
  //HandleYesorNo
  const HandleYesorNo = (confirmaed, e, data) => {
    return props.HandleYesorNo(confirmaed, e, data);
  };
  return (
    <>
      <div className="tablef2" key={props.todo.id}>
        <div className="td">{props.todo.id}</div>
        <div className="td">{props.todo.Name}</div>
        <div className="td">{props.todo.Gender}</div>
        <div className="td">{props.todo.Location}</div>
        <div className="td" style={{ display: "flex", gap: "5px" }}>
          <button
            className="edit-btn"
            value={props.todo.id}
            id={props.todo.id}
            onClick={HandleEdit}
          >
            Edit
          </button>
          <button
            className="delete-btn"
            id={props.todo.id}
            value={props.todo.id}
            onClick={HandleDelete}
          >
            Delete
          </button>
        </div>
        {props.error && (
          <Error
            id={props.todo.id}
            message={`Are you sure you want to Edit ${props.todo.id}th Id datas `}
            HandleYesorNo={HandleYesorNo}
            name={"error"}
          />
        )}
        {props.errorRetrieve && (
          <Error
            id={props.todo.id}
            message={`Are you sure you want to Delete ${props.todo.id}th Id datas it goes to Retrieve table `}
            HandleYesorNo={HandleYesorNo}
            name={"error2"}
          />
        )}
      </div>
    </>
  );
}

export default TableList;
