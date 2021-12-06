import React from 'react'
import classes from './DeliveryComponent.module.css';
import { faMapMarkerAlt, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DeliveryComponent() {
    return (
        <div className="delivery-location d-flex align-items-center mx-3 cursor-pointer">
            <div className="delivery-icon mx-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="fs-2"></FontAwesomeIcon>
            </div>
            <div className="delivery-description d-flex flex-column mx-2">
                <span className={classes['delivery-title']}>Delivery To</span>
                <span className={classes['delivery-place']}>Dammam</span>
            </div>
            <FontAwesomeIcon icon={faChevronDown} className="mx-2"></FontAwesomeIcon>
        </div>
    )
}

export default DeliveryComponent;
