import React from "react";

const DeliveryTravel = (props) => {
  return (
    <div className="flex items-center gap-3 my-4">
      <img src={props.images} alt="money" />
      <p>{props.description}</p>
    </div>
  );
};

export default DeliveryTravel;
