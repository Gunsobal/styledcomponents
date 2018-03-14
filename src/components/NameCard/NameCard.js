import React from 'react';
import PropTypes from 'prop-types';
import styles from './NameCard.css';

const NameCard = ({ name, email, telephone, imageUrl }) => {
    return (
        <div className={styles.container}>
            
        </div>
    )
};

NameCard.propTypes = {
    /** Name on to display on namecard */
    name: PropTypes.string.isRequired,

    /** Email to display on namecard */
    email: PropTypes.string.isRequired,

    /** Telephone number to display on namecard */
    telephone: PropTypes.string.isRequired,

    /** Url to an image to display on namecard */
    imageUrl: PropTypes.string.isRequired    
};


export default NameCard;