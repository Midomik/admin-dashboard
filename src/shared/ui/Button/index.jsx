import PropTypes from 'prop-types';

import { cn } from '../../lib/cn';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  ' rounded-[60px] font-[500]  mobile-sm:text-[12px] tablet:text-[14px] py-[10px] h-[44px] flex items-center justify-center',
  {
    variants: {
      size: {
        green: ' bg-green-accent leading-[112%] px-[30px]',
        white: '  bg-white leading-[100%] ',
        gray: 'bg-dark-0.3 leading-[129%] text-dark-0.4 px-[30px]',
      },
    },
    defaultVariants: {
      variant: 'green',
    },
  }
);

export const Button = ({ className, children, size = 'green', ...rest }) => {
  return (
    <button className={cn(buttonVariants({ size, className }))} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
};
