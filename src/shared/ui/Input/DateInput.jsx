import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';
import { CalendarIcon } from '../../assets/icons/CalendarIcon';
import { format } from 'date-fns';

export const DateInput = ({ control, name, defaultValue = null, ...rest }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ...fieldRest } }) => (
        <div className="relative">
          <DatePicker
            {...fieldRest}
            selected={value || defaultValue}
            onChange={(date) => onChange(format(date, 'MMMM d, yyyy'))}
            placeholderText="Delivery date"
            className="focus:ring-blue-500 h-[44px] rounded-[60px] border border-dark-0.1 p-2 pl-[18px] placeholder:text-[12px] placeholder:text-dark-0.4 focus:border-transparent focus:outline-none focus:ring-2 mobile-sm:w-[295px] tablet:w-[224px]"
            dateFormat="MMMM d, yyyy"
            {...rest}
          />
          <div className="pointer-events-none absolute inset-y-0 right-[6px] top-[0] flex items-center pr-3">
            <CalendarIcon />
          </div>
        </div>
      )}
    />
  );
};

DateInput.propTypes = {
  control: PropTypes.any,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
};
