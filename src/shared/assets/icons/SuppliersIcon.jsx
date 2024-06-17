import PropTypes from 'prop-types';

export const SuppliersIcon = ({ isActive }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6667 9.33335H8.66667V11.3334H7.33333V9.33335H5.33333V8.00002H7.33333V6.00002H8.66667V8.00002H10.6667M14 3.33335H12.2333L13 1.23335L11.4333 0.666687L10.46 3.33335H2V4.66669L3.33333 8.66669L2 12.6667V14H14V12.6667L12.6667 8.66669L14 4.66669V3.33335Z"
        fill={isActive ? '#59b17a' : '#DCDDDF'}
      />
    </svg>
  );
};
SuppliersIcon.propTypes = {
  isActive: PropTypes.bool,
};
