import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import React from 'react';
import { Input } from '../Input';
import { yupResolver } from '@hookform/resolvers/yup';

export const Form = ({
  defaultValues,
  className,
  submit,
  label,
  validationSchema,
  children,
  isReset = true,
  ...rest
}) => {
  const {
    register,
    handleSubmit,
    reset,
    unregister,
    formState: { errors, touchedFields },
  } = useForm({
    mode: 'onBlur',
    defaultValues: defaultValues,
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
  });

  const childrenWithProps = React.Children.map(children, (child) => {
    if (child?.type === Input) {
      return React.cloneElement(child, {
        register,
        unregister,
        errors,
        touchedFields,
        validate: validationSchema ? true : false,
      });
    }
    return child;
  });

  const onSubmit = (data, event) => {
    event.preventDefault();
    
    submit(data);
    isReset ? reset() : null;
  };
  return (
    <form
      className={`flex flex-col gap-[8px] ${className}`}
      onSubmit={handleSubmit(onSubmit)}
      {...rest}
    >
      {label && (
        <p className="ml-[14px] leading-[129%] mobile-sm:text-[10px] tablet:text-[14px] ">
          {label}
        </p>
      )}
      {childrenWithProps}
    </form>
  );
};

Form.propTypes = {
  defaultValues: PropTypes.object,
  className: PropTypes.string,
  submit: PropTypes.func,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
  validationSchema: PropTypes.any,
  isReset: PropTypes.bool,
};
