import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

import { formStyles } from './formStyles';
import options from '../../../features/data/addProduct';

export const CustomSelect = ({ control, name, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Select
          value={options.find((option) => option.value === value)} // Встановлюємо значення з контролера
          onChange={(selectedOption) => {
            onChange(selectedOption.value); // Передаємо значення в react-hook-form
          }}
          getOptionValue={(option) => option.value} // Опція, яка повертає значення опції
          options={options}
          styles={formStyles}
          {...rest}
        />
      )}
    />
  );
};

CustomSelect.propTypes = {
  control: PropTypes.any,
  name: PropTypes.string,
};
