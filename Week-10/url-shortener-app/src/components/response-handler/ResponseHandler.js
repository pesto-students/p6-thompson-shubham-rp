import React from "react";

function ResponseHandler({ onResponseWindowClick }) {
  return (
    <div className="response-handler">
      <button onClick={onResponseWindowClick}>Create Another Link</button>
    </div>
  );
}

export default ResponseHandler;
