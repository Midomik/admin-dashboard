import PropTypes from 'prop-types';

export const PaginationCicrcle = ({ isActive = false }) => {
  return (
    <svg
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="4.99795"
        cy="5.501"
        r="4.75051"
        fill={isActive ? '#59B17A' : '#E7F1ED'}
      />
    </svg>
  );
};

PaginationCicrcle.propTypes = {
  isActive: PropTypes.bool,
};
