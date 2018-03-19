import React from 'react';
import PropTypes from 'prop-types';
import styles from './NameCard.css';

const NameCard = ({ name, email, telephone, imageUrl }) => {
    return (
        <div className={styles.namecard}>
            <figure className={styles.profile} style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className={styles.info} >
                <h5 className={styles.name}>{name}</h5>
                <div className={styles.contact}>
                    <div className={styles.icon}>
                        &diams;
                    </div>
                    <div className={styles.text}>
                        {email}
                    </div>
                </div>
                <div className={styles.contact}>
                    <div className={styles.icon}>
                        &diams;
                    </div>
                    <div className={styles.text}>
                        {telephone}
                    </div>
                </div>
            </div>
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