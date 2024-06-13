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

  return (
    <>
      {isRegister && (
        <div>
          <div
            className={`text-[rgba(29, 30, 33, 0.4)] relative box-border flex w-full  items-center gap-[10px] rounded-[12px] bg-white text-base hover:border hover:border-[#f9f9f91a] mobile-sm:h-[44px] tablet:h-[50px] ${getInputClasses(name)}`}
          >
            {/* <span className="text-gray-68 ml-[14px] flex h-full flex-shrink-0 flex-grow items-center mobile-sm:text-[12px] tablet:text-[14px]">
              {title}
            </span> */}
            <input
              className=" placeholder:text-[rgba(29, 30, 33, 0.4)] h-full w-full rounded-[12px] border-none bg-transparent focus:border-none focus:border-white focus:outline-none mobile-sm:text-[12px] mobile-sm:placeholder:text-[12px] tablet:text-[14px] tablet:placeholder:text-[14px]"
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

              {/* {getInputClasses(name) ===
                'border border-[#e90516] hover:border-[#e90516]' && (
                <ErrorIcon />
              )}
              {getInputClasses(name) ===
                'border border-[#30b94d] hover:border-[#30b94d]' && (
                <SuccIcon />
              )} */}
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
};
