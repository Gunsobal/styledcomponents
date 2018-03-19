import React from 'react';
import PropTypes from 'prop-types';
import styles from './Col.css'

const Col = ({ size, children }) => (
    <div className={`${styles.col} ${styles[`col-${size}`]}`}>
        {children}
    </div>
);

Col.propTypes = {
    /** Size of column, 1-12 */
    size: PropTypes.number,

    /** Content to put inside this column */
    children: PropTypes.node.isRequired
}

Col.defaultProps = {
    size: 1
}

export default Col;