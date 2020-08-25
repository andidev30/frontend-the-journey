import React from "react";

function TitleJourney({ data }) {
  return (
    <>
      <div className="row d-flex justify-content-between">
        <h4>{data.title}</h4>
        <p>{data.user.fullname}</p>
      </div>
      <div className="row">
        <p>{data.createdAt}</p>
      </div>
    </>
  );
}

export default TitleJourney;
