import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.css';

console.log(styles);

class Modal extends React.Component {
    render() {
        return (
            <div className={`${styles.modal}`}>Modal</div>
        )
    }
}

Modal.Title = class Title extends React.Component {
    render() {
        return (
            <div>Title</div>
        )
    }
}

Modal.Body = class Body extends React.Component {
    render() {
        return (
            <div>Body</div>
        )
    }
}

Modal.Footer = class Footer extends React.Component {
    render() {
        return (
            <div>Footer</div>
        )
    }
}

Modal.propTypes = {
    /** Control whether to display this modal or not */
    isOpen: PropTypes.bool,

    /** Handler for when this modal is closed */
    onClose: PropTypes.func.isRequired
};

Modal.defaultProps = {
    isOpen: false
};

export default Modal;