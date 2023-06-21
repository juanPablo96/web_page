import React from "react";

function Service(props) {
  return (
    <div className="service ">
      <h3>{props.serviceName}</h3>
      <p>{props.serviceDetail}</p>
    </div>
  );
}

export default Service;
