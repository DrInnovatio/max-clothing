import React from 'react';
import './custom-button.styles.scss';

const Custombutton = ({children, ...otherProps}) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
)

export default Custombutton;