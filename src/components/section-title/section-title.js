import React from 'react';
import './section-title.css';
import PropTypes from 'prop-types';

const SectionTitle = ({ sectionTitle }) => (
  <h3 className="section-header">{sectionTitle}</h3>
);

SectionTitle.propTypes = {
  sectionTitle: PropTypes.string,
};

SectionTitle.defaultProps = {
  item: 'All books',
};

export default SectionTitle;
