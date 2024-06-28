import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import React, { useEffect } from 'react';
import { Input } from '../Input';
import { yupResolver } from '@hookform/resolvers/yup';

import { cn } from '../../lib/cn';
import { cva } from 'class-variance-authority';
import { Notify } from 'notiflix';

const formVariants = cva(' flex gap-[14px]', {
  variants: {
    variant: {
      filter: 'flex-row',
      default: 'flex-col',
      wrap: 'flex-wrap',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const Form = ({
  defaultValues,
  className,
  submit,
  label,
  validationSchema,
  children,
  isReset = true,
  variant = 'default',
  ...rest
}) => {
  const {
    register,
    handleSubmit,
    reset,
    unregister,
    formState: { errors, touchedFields },
    control,
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
        control,
      });
    } else {
      return React.cloneElement(child, {
        control,
        errors,
      });
    }
  });
  const errorMessages = Object.values(errors).map((error) => error.message);

  useEffect(() => {
    if (errorMessages.length > 0) {
      errorMessages.forEach((message) => {
        Notify.failure(message);
      });
    }
  }, [errorMessages]);

  const onSubmit = (data, event) => {
    event.preventDefault();

    submit(data);
    isReset ? reset() : null;
  };
  return (
    <form
      className={cn(formVariants({ variant, className }))}
      onSubmit={handleSubmit(onSubmit)}
      {...rest}
    >
      {label && (
        <p className=" mt-[20px] w-full font-[600] leading-[117%] mobile-sm:mb-[20px] mobile-sm:text-[20px] tablet:mb-[40px] tablet:text-[24px]">
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
  variant: PropTypes.string,
};
