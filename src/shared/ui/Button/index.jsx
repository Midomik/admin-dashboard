import PropTypes from 'prop-types';

import { cn } from '../../lib/cn';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'border-[rgba(249, 249, 249, 0.2)] rounded-[30px] font-[700]',
  {
    variants: {
      size: {
        small:
          ' border border-[#f9f9f933] tablet:px-[28px] tablet:py-[12px] mobile-sm:px-[20px] mobile-sm:py-[10px] leading-[112%] mobile-sm:text-[14px] tablet:text-[16px]',
        large:
          'tablet:px-[54px] tablet:py-[16px] mobile-sm:px-[29px] mobile-sm:py-[12px] leading-[100%] text-[20px]',
      },
    },
    defaultVariants: {
      variant: 'small',
    },
  }
);

export const Button = ({ className, children, size = 'small', ...rest }) => {
  return (
    <button
      className={cn(buttonVariants({ size, className }))}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
};
