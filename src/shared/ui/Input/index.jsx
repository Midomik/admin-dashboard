import PropTypes from 'prop-types';
import { useEffect } from 'react';
// import { ErrorIcon } from '../../assets/icons/ErrorIcon';
// import { SuccIcon } from '../../assets/icons/SuccIcon';

export const Input = ({
  name,
  // title,
  isRegister = true,
  type = 'text',
  eyeIcon,
  checkPassword,
  register,
  unregister,
  touchedFields,
  validate,
  errors,
  className,
  ownWidth = false,
  ...rest
}) => {
  if (!register) return null;

  useEffect(() => {
    if (!isRegister) {
      unregister('name');
    }
  }, [isRegister]);

  const getInputClasses = (fieldName) => {
    if (!touchedFields[fieldName]) {
      return 'border border-transparent';
    }

    return validate
      ? errors[fieldName]
        ? 'border border-[#e90516] hover:border-[#e90516]'
        : 'border border-[#30b94d] hover:border-[#30b94d]'
      : 'border border-transparent';
  };
  console.log(ownWidth);

  return (
    <>
      {isRegister && (
        <div>
          <div
            className={` relative  flex  h-[46px]  w-full items-center gap-[10px] rounded-[60px] text-base text-[#1d1e2166]  hover:border ${getInputClasses(name)}`}
          >
            <input
              className={` h-full  rounded-[60px] border border-[#1d1e211a] bg-white pl-[18px] text-[12px]  text-dark placeholder:text-[12px] placeholder:text-[#1d1e2166] focus:border-green-accent focus:outline-none ${className}`}
              type={type}
              autoComplete={name}
              {...register(name)}
              {...rest}
            />

            <div className="absolute right-0 top-[50%] translate-x-[-50%] translate-y-[-50%] justify-center ">
              <div
                onMouseDown={() => checkPassword(true, 1)}
                onMouseUp={() => checkPassword(false, 2)}
                onMouseLeave={() => checkPassword(false, 3)}
              >
                {eyeIcon}
              </div>
            </div>
          </div>
          {errors[name] && (
            <p
              className={`ml-[14px] mt-[8px] mobile-sm:text-[10px] mobile-sm:leading-[120%] tablet:text-[12px] tablet:leading-[117%] ${errors[name] ? 'text-[#e90516]' : 'text-[#30b94d]'}`}
            >
              {errors[name]?.message}
            </p>
          )}
        </div>
      )}
    </>
  );
};

Input.propTypes = {
  // title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  variant: PropTypes.string,
  register: PropTypes.func,
  unregister: PropTypes.func,
  className: PropTypes.string,
  isRegister: PropTypes.bool,
  errors: PropTypes.object,
  touchedFields: PropTypes.object,
  validate: PropTypes.bool,
  type: PropTypes.string,
  eyeIcon: PropTypes.node,
  checkPassword: PropTypes.func,
  ownWidth: PropTypes.bool,
};
