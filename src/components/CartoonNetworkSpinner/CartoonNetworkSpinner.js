import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartoonNetworkSpinner.css';

const ANIM_TIME = 2;

const images = [
    'TasmanianDevil',
    'BugsBunny',
    'TomAndJerry',
    'DaffyDuck',
    'WileECoyote'
];

class CartoonNetworkSpinner extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            displayed: 0
        }
        setInterval(() => {
            let { displayed } = this.state;
            const max = images.length - 1;
            this.setState({
                displayed: displayed < max ? ++displayed : 0
            });
        }, 1000 * (this.props.interval + ANIM_TIME));
    }
    render() {
        const { displayed } = this.state;
        return (
            <div className={styles.spinner}>
                <figure className={`${styles.image} ${styles[images[displayed]]}`}></figure>
            </div>  
        )
    };
} 
    
CartoonNetworkSpinner.propTypes = {
    /** Interval to spin image in seconds */
    interval: PropTypes.number
};

CartoonNetworkSpinner.defaultProps = {
    interval: 3
};

export default CartoonNetworkSpinner;