import React, { useState, useRef , useEffect } from 'react';
import './dropDown.css';

function DropDown({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Attach click event listener to handle clicks outside the dropdown
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
      className='drop-down-container'
    >
      <button className='drop-down-button'>Dropdown</button>

      {isOpen && (
        <ul className='drop-down-list'>
          {items.map((item, index) => (
            <li key={index} onClick={handleOptionClick}>
              {item}
            </li>
          ))}
        </ul>
      )}
      
    </div>
    
  );
}

export default DropDown;
