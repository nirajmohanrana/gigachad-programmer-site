import React from "react";
import { useParams } from "react-router-dom";

function Aptitude() {
  const params = useParams();
  const { aptId } = params;

  return (
    <>
      <div>
        <p>{aptId}</p>
      </div>
    </>
  );
}

export default Aptitude;
