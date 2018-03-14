import React from 'react';
import PropTypes from 'prop-types';
import styles from './Col.css'

const Col = ({ size, children }) => (
    <div className={`${styles.col} ${styles[`col-${size}`]}`}>
        {children}
    </div>
);

Col.propTypes = {
    size: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired
}

Col.defaultProps = {
    size: 1
}

export default Col;