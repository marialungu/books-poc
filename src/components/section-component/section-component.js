import React from 'react';
import './section-component.css';

const SectionComponent = ({ sectionTitle = 'Maybe you would also like...' }) => (
  <div className="section-header">{sectionTitle}</div>
);

export default SectionComponent;
