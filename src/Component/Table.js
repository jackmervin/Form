import React from "react";
import TableList from "./TableList";
import "./Table.css";

function Table(props) {
  //On Delete
  const onDelete = (data) => {
    return props.onDelete(data);
  };

  //On Edit
  const HandleEdit = (data) => {
    return props.HandleEdit(data);
  };
  //HandleYesorNo
  const HandleYesorNo = (confirmaed, e, data) => {
    return props.HandleYesorNo(confirmaed, e, data);
  };
  return (
    <>
      {Object.entries(props.todos).length > 0 && (
        <div>
          <h4>TABLE DATA</h4>
          <div className="t">
            <div className="tablef">
              <div className="th">ID</div>
              <div className="th">Name</div>
              <div className="th">Gender</div>
              <div className="th">Location</div>
              <div className="th">Action</div>
            </div>
            {props.todos.map((todo, key) => (
              <TableList
                key={key}
                todo={todo}
                onDelete={onDelete}
                HandleEdit={HandleEdit}
                error={props.error}
                errorRetrieve={props.errorRetrieve}
                HandleYesorNo={HandleYesorNo}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Table;
