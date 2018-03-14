import React from 'react';
import PropTypes from 'prop-types';
import styles from './Row.css';

const Row = ({children}) => (
    <div className={`${styles.row}`}>
        {children}
    </div>
);

Row.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Row;