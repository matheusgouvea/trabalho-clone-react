import React, { useState } from 'react';
import buttonStyles from './style';

const Button = ({ type = 'default', onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const style = {
    ...buttonStyles.base,
    ...buttonStyles[type],
    ...(isHovered ? buttonStyles.hover : {}),
    ...(isActive ? buttonStyles.active : {}),
  };

  return (
    <button
      type="button"
      style={style}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      {children}
    </button>
  );
};

export default Button;
