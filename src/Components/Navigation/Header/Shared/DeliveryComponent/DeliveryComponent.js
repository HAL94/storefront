import React from "react";
import classes from "./DeliveryComponent.module.css";

import FeatherIcon from "feather-icons-react";

function DeliveryComponent() {
  return (
    <div className="delivery-location d-flex align-items-center mx-3 cursor_pointer">
      <div className="delivery-icon mx-2">
        <FeatherIcon icon="map-pin" size="20" />
      </div>
      <div className="delivery-description d-flex flex-column">
        <span className={classes["delivery-title"]}>Delivery To</span>
        <span className={classes["delivery-place"]}>Dammam</span>
      </div>

      <FeatherIcon icon="chevron-down" size="16" className="mx-2"/>
    </div>
  );
}

export default DeliveryComponent;
