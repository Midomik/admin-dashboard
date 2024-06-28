import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

import { formStyles } from './formStyles';

export const CustomSelect = ({ control, name, options, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Select
          value={options?.find((option) => option.value === value)}
          onChange={(selectedOption) => {
            onChange(selectedOption.value);
          }}
          getOptionValue={(option) => option.value}
          options={options}
          styles={formStyles}
          dateFormat="MMMM d, yyyy"
          {...rest}
        />
      )}
    />
  );
};

CustomSelect.propTypes = {
  control: PropTypes.any,
  name: PropTypes.string,
  options: PropTypes.array,
};
