import React from "react";
import classes from "./DeliveryComponent.module.css";

import {
  faMapMarkerAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeatherIcon from "feather-icons-react";

function DeliveryComponent() {
  return (
    <div className="delivery-location d-flex align-items-center mx-3 cursor-pointer">
      <div className="delivery-icon mx-2">
        <FeatherIcon icon="map-pin" size="20" />
      </div>
      <div className="delivery-description d-flex flex-column">
        <span className={classes["delivery-title"]}>Delivery To</span>
        <span className={classes["delivery-place"]}>Dammam</span>
      </div>

      <FontAwesomeIcon icon={faChevronDown} className="mx-2"></FontAwesomeIcon>
    </div>
  );
}

export default DeliveryComponent;
