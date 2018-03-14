import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar.css';

const ProgressBar = ({ progress, striped, animated, state}) => (
    <div className={`${styles['progress-container']} ${animated ? styles.animate : null}`}>
        <span className={`${styles[`progress-bar`]} ${striped ? styles['progress-bar-striped'] : null} ${styles[`progress-${state}`]}`} style={{width: `${progress}%`}}>
            <span className={`${styles.progress}`}></span>
        </span>
    </div>
);

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
    striped: PropTypes.bool.isRequired,
    animated: PropTypes.bool.isRequired,
    state: PropTypes.oneOf(
        ['info', 'success', 'warning', 'danger']
    )
}

export default ProgressBar;