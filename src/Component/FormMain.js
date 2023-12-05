import React, { useState } from "react";
import "./FormMain.css";
import Table from "./Table";
import Retrieve from "./Retrieve";
import UpdateError from "./UpdateError";

//Default Array Data
let id = 1;
// const Datas = [
//   { id: 1, Name: "Mervin", Gender: "Male", Location: "Chennai" },
//   { id: 2, Name: "Jacob", Gender: "Male", Location: "Trichy" },
//   { id: 3, Name: "Velan", Gender: "Female", Location: "Thanjavur" },
// ];
function FormMain() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    Name: "",
    Gender: "",
    Location: "",
  });
  const [retrive, setrive] = useState([]);
  const [error, seterrop] = useState(false);
  const [errorRetrieve, setRetrieve] = useState(false);
  const [errorUpdate, setupdate] = useState(false);
  //Add Object in Array
  const HandelSubmit = (e) => {
    e.preventDefault();

    if (formData.Name.trim().length === 0) {
      return alert("Please provide a name");
    }
    if (Number(formData.Name) >= 0) {
      return alert("only enter text value");
    }

    if (formData.Location.trim().length === 0) {
      return alert("Please provide location");
    }
    if (Number(formData.Location) >= 0) {
      return alert("only enter text value");
    }

    setData(() => {
      const NewData = {
        id: id++,
        Name: formData.Name,
        Gender: formData.Gender || "Male",
        Location: formData.Location,
      };
      return [...data, NewData];
    });
    setFormData({ id: null, Name: "", Gender: "", Location: "" });
  };

  //OnChange Handle Get Object
  const HandleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //HandleCancle
  const HandleCancel = () => {
    setFormData({ id: null, Name: "", Gender: "", Location: "" });
  };
  //HandleCancelUp
  const HandleCancelUp = (e) => {
    setFormData(
      data.find((val) => {
        return val.id === Number(e.target.id);
      })
    );
    setFormData({ id: null, Name: "", Gender: "", Location: "" });
  };
  //Handle Delete

  const onDelete = (e) => {
    const hasError = Number(e.target.id) === Number(e.target.value);
    if (hasError) {
      setRetrieve(true);
    } else {
      setrive(
        data.filter((value) => {
          return value.id === Number(e.target.id);
        })
      );
      return setData((prevData) => {
        return prevData.filter((value) => {
          return value.id !== Number(e.target.id);
        });
      });
    }
  };

  //Handle Edit
  const HandleEdit = (e) => {
    const hasError = Number(e.target.id) === Number(e.target.value);
    if (hasError) {
      seterrop(true);
    } else {
      const NewObject = data.find((val) => val.id === Number(e.target.id));
      setFormData({
        id: NewObject.id,
        Name: NewObject.Name,
        Gender: NewObject.Gender,
        Location: NewObject.Location,
      });
    }
  };

  //HandleUpdate
  const HandleUpdate = (e) => {
    const hasError = Number(e.target.id) === Number(e.target.value);
    if (hasError) {
      setupdate(true);
    } else {
      if (formData.Name.trim().length === 0) {
        return alert("Please provide a name");
      }
      if (Number(formData.Name) >= 0) {
        return alert("only enter text value");
      }

      if (formData.Location.trim().length === 0) {
        return alert("Please provide location");
      }
      if (Number(formData.Location) >= 0) {
        return alert("only enter text value");
      }
      const updateValue = data.map((val) => {
        return val.id === formData.id
          ? {
              ...val,
              id: formData.id,
              Name: formData.Name,
              Gender: formData.Gender,
              Location: formData.Location,
            }
          : val;
      });
      setData(updateValue);
      setFormData({ id: null, Name: "", Gender: "", Location: "" });
    }
  };
  //Handle Retrieve
  const HandleRitrive = (data) => {
    setData((prevValu) => {
      return [...prevValu, ...data];
    });
  };
  //HandleYesorNo
  const HandleYesorNo = (confirmaed, e, data1) => {
    if (data1 === "error") {
      if (confirmaed) {
        seterrop(false);
        const NewObject = data.find((val) => val.id === Number(e.target.id));
        setFormData({
          id: NewObject.id,
          Name: NewObject.Name,
          Gender: NewObject.Gender,
          Location: NewObject.Location,
        });
      } else {
        seterrop(false);
      }
    } else {
      if (confirmaed) {
        setRetrieve(false);
        setFormData({ id: null, Name: "", Gender: "", Location: "" });
        setrive(
          data.filter((value) => {
            return value.id === Number(e.target.id);
          })
        );
        return setData((prevData) => {
          return prevData.filter((value) => {
            return value.id !== Number(e.target.id);
          });
        });
      } else {
        setRetrieve(false);
      }
    }
  };
  //HandleErrorUpdate
  const HandleUpdateE = (confirmaed, e, data1) => {
    if (confirmaed) {
      setupdate(false);
      if (formData.Name.trim().length === 0) {
        return alert("Please provide a name");
      }
      if (Number(formData.Name) >= 0) {
        return alert("only enter text value");
      }

      if (formData.Location.trim().length === 0) {
        return alert("Please provide location");
      }
      if (Number(formData.Location) >= 0) {
        return alert("only enter text value");
      }
      const updateValue = data.map((val) => {
        return val.id === formData.id
          ? {
              ...val,
              id: formData.id,
              Name: formData.Name,
              Gender: formData.Gender,
              Location: formData.Location,
            }
          : val;
      });
      setData(updateValue);
      setFormData({ id: null, Name: "", Gender: "", Location: "" });
    } else {
      setupdate(false);
    }
  };
  return (
    <>
      <div
        style={{
          padding: "10px",
        }}
      >
        <h4>FORM DATA</h4>
        <form className={"user-form"}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="Name"
            value={formData.Name}
            onChange={HandleInputChange}
          />

          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="Gender"
            value={formData.Gender}
            onChange={HandleInputChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="Location"
            value={formData.Location}
            onChange={HandleInputChange}
          />
          <div className="flex1">
            {formData.id ? (
              <button
                type="button"
                id={formData.id}
                value={formData.id}
                onClick={HandleUpdate}
              >
                Update
              </button>
            ) : (
              <button type="button" onClick={HandelSubmit}>
                Submit
              </button>
            )}
            {formData.id ? (
              <button type="button" id={formData.id} onClick={HandleCancelUp}>
                Cancel
              </button>
            ) : (
              <button type="button" onClick={HandleCancel}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
      {errorUpdate && (
        <UpdateError
          id={formData.id}
          message={`Are you sure you want to Update the ${formData.id}th Old value 
        
          `}
          HandleUpdateE={HandleUpdateE}
        />
      )}
      <Table
        onDelete={onDelete}
        todos={data}
        HandleEdit={HandleEdit}
        error={error}
        errorRetrieve={errorRetrieve}
        HandleYesorNo={HandleYesorNo}
      />
      <Retrieve datas={retrive} HandleRitrive={HandleRitrive} />
    </>
  );
}

export default FormMain;
