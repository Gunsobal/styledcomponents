import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.css';

const Modal = ({ children, isOpen, onClose }) => {
    return (
        <div className={styles.container} 
             style={{display: isOpen ? 'flex' : 'none'}}
             onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>  
    )
};

Modal.Title = ({ children }) => {
    return (
        <h4 className={`${styles.title} ${styles.common}`}>
            {children}
        </h4>
    )
};


Modal.Body = ({ children }) => {
    return (
        <div className={`${styles.body} ${styles.common}`}>
            {children}
        </div>  
    )
};

Modal.Footer = ({ children }) => {
    return (
        <div className={`${styles.footer} ${styles.common}`}>
            {children}
        </div>
    )
};

Modal.propTypes = {
    /** Control whether to display this modal or not */
    isOpen: PropTypes.bool,

    /** Child nodes */
    children: PropTypes.node,

    /** Handler for when this modal is closed */
    onClose: PropTypes.func.isRequired
};

Modal.defaultProps = {
    isOpen: false
};

Modal.Title.propTypes = {
    /** Child nodes */
    children: PropTypes.node
};

Modal.Body.propTypes = {
    /** Child nodes */
    children: PropTypes.node
};

Modal.Footer.propTypes = {
    /** Child nodes */
    children: PropTypes.node
};

export default Modal;