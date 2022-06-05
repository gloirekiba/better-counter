import React from "react";

import CreateCounter from "./CreateCounter";
import EditCounter from "./EditCounter";

const ManageCounter = ({
  context = "create",
  addCounter,
  counter,
  editCounter,
  deleteCounter,
  setShowForm,
}) => {
  return (
    <>
      {context === "create" ? (
        <CreateCounter addCounter={addCounter} setShowForm={setShowForm} />
      ) : (
        <EditCounter
          counter={counter}
          editCounter={editCounter}
          deleteCounter={deleteCounter}
          setShowForm={setShowForm}
        />
      )}
    </>
  );
};

export default ManageCounter;
