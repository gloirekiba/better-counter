import React from "react";

import CreateCounter from "./CreateCounter";
import EditCounter from "./EditCounter";

const ManageCounter = ({
  context = "create",
  addCounter,
  counter,
  editCounter,
  deleteCounter,
  setShowCounterCreate,
  setShowCounterEdit,
}) => {
  return (
    <>
      {context === "create" ? (
        <CreateCounter addCounter={addCounter} setShowCounterCreate={setShowCounterCreate} />
      ) : (
        <EditCounter
          counter={counter}
          editCounter={editCounter}
          deleteCounter={deleteCounter}
          setShowCounterEdit={setShowCounterEdit}
        />
      )}
    </>
  );
};

export default ManageCounter;
