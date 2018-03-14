import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.css';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { images, size } = this.props;
        return (
            <div>Carousel</div>
        )
    }
}
Carousel.propTypes = {
    /** Images to carousel through, array of urls */
    images: PropTypes.arrayOf(PropTypes.string),

    /** Size to display images */
    size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Carousel.defaultProps = {
    images: [],
    size: 'medium'
};

export default Carousel;