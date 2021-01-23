import React, { memo } from 'react';
import PropTypes from 'prop-types';

const CheckSvg = ({ id }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M1 8C1 4.13425 4.13337 1 8 1C11.8658 1 15 4.13425 15 8C15 11.8658 11.8658 15 8 15C4.13337 15 1 11.8658 1 8ZM6.27214 10.6339C6.61339 10.976 7.16727 10.976 7.50939 10.6339L11.0715 7.07179C11.4136 6.72966 11.4136 6.17579 11.0715 5.83454C10.7294 5.49241 10.1755 5.49241 9.83427 5.83454L6.89077 8.77804L6.16539 8.05266C5.82414 7.71141 5.27027 7.71141 4.92814 8.05266C4.58689 8.39479 4.58689 8.94866 4.92814 9.29079L6.27214 10.6339Z" fill="white" />
    <mask id={id} mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="14">
      <path fillRule="evenodd" clipRule="evenodd" d="M1 8C1 4.13425 4.13337 1 8 1C11.8658 1 15 4.13425 15 8C15 11.8658 11.8658 15 8 15C4.13337 15 1 11.8658 1 8ZM6.27214 10.6339C6.61339 10.976 7.16727 10.976 7.50939 10.6339L11.0715 7.07179C11.4136 6.72966 11.4136 6.17579 11.0715 5.83454C10.7294 5.49241 10.1755 5.49241 9.83427 5.83454L6.89077 8.77804L6.16539 8.05266C5.82414 7.71141 5.27027 7.71141 4.92814 8.05266C4.58689 8.39479 4.58689 8.94866 4.92814 9.29079L6.27214 10.6339Z" fill="white" />
    </mask>
    <g mask={`url(#${id})`}>
      <rect width="16" height="16" fill="white" />
    </g>
  </svg>

);

CheckSvg.propTypes = {
  id: PropTypes.string.isRequired,
};

export default memo(CheckSvg);
