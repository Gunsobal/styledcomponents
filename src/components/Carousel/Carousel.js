import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.css';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
    }
    slideLeft() {
        let { selected } = this.state;
        const max = this.props.images.length - 1;
        this.setState({
            selected: selected > 0 ? --selected : max 
        });
    }
    slideRight() {
        let { selected } = this.state;
        const max = this.props.images.length - 1;
        this.setState({
            selected: selected < max ? ++selected : 0
        });
    }
    render() {
        const { images, size } = this.props;
        const { selected } = this.state;
        return (
            <figure className={`${styles.carousel} ${styles[size]}`} style={{backgroundImage: `url(${images[selected]})`}}>
                <button className={styles.control} onClick={() => this.slideLeft()}>&lt;</button>
                <button className={styles.control} onClick={() => this.slideRight()}>&gt;</button>
            </figure>
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