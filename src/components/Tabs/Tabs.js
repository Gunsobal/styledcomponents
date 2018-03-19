import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.css'

const Tabs = ({ theme, layout, currentSelectedTab, onSelect, children  }) => (
    <div className={`${styles['tabs-container']} ${styles[`tabs-${theme}`]}`}>
        <div className={`${styles.tabs} ${styles[`tabs-${layout}`]}`}>
            {children.length ? children.map(
                child => <div className={`${styles.tab} ${child.props.selectionKey === currentSelectedTab ? styles.active : ''}`} key={child.props.selectionKey} onClick={() => onSelect(child.props.selectionKey)}>{child.props.title}</div>) 
                : <div className={`${styles.tab}`} onClick={() => onSelect(children.props.selectionKey)}>{children.props.title}</div>
            }
        </div>
        <div className={`${styles['tab-content']} ${styles[`tab-content-${layout}`]}`}>
            {children.length ? children.find(child => child.props.selectionKey === currentSelectedTab) : children}
        </div>
    </div>
);

Tabs.propTypes = {
    theme: PropTypes.oneOf([
        'dark', 'light'
    ]).isRequired,
    layout: PropTypes.oneOf([
        'horizontal', 'vertical'
    ]).isRequired,
    onSelect: PropTypes.func.isRequired,
    currentSelectedTab: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired
}

Tabs.defaultProps = {
    theme: 'light',
    layout: 'horizontal'
}

export default Tabs;