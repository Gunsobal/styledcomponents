import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ selectionKey, title, children }) => (
    <div>{children}</div>
);

Tab.propTypes = {
    selectionKey: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Tab;