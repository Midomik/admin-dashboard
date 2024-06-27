import { StackOfCoinsIcon } from '../../shared/assets/icons/StackOfCoinsIcon';
import { PeopleIcon } from '../../shared/assets/icons/PeopleIcon';
import PropTypes from 'prop-types';

export const Statistics = ({
  countOfProduct,
  countOfSuppliers,
  countOfCustomers,
  className,
}) => {
  return (
    <div
      className={`mt-[20px] flex gap-[20px] mobile-sm:flex-wrap tablet:flex-nowrap ${className}`}
    >
      <div className="rounded-[8px] border border-green-accent bg-white px-[14px] py-[8px] mobile-sm:w-[155px] tablet:w-[240px]">
        <div className="mb-[28px] flex gap-[8px]">
          <StackOfCoinsIcon />
          <p>All products</p>
        </div>

        <h3 className="text-[24px] font-[600] leading-[133%]">
          {countOfProduct}
        </h3>
      </div>

      <div className="rounded-[8px]  border border-dark-0.1 bg-white px-[14px] py-[8px] mobile-sm:w-[155px] tablet:w-[240px]">
        <div className="mb-[28px] flex gap-[8px]">
          <PeopleIcon />
          <p>All suppliers</p>
        </div>

        <h3 className="text-[24px] font-[600] leading-[133%]">
          {countOfSuppliers}
        </h3>
      </div>

      <div className=" rounded-[8px] border border-dark-0.1 bg-white px-[14px] py-[8px] mobile-sm:w-[155px] tablet:w-[240px]">
        <div className="mb-[28px] flex gap-[8px]">
          <PeopleIcon />
          <p>All customers</p>
        </div>

        <h3 className="text-[24px] font-[600] leading-[133%]">
          {countOfCustomers}
        </h3>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  countOfProduct: PropTypes.number,
  countOfSuppliers: PropTypes.number,
  countOfCustomers: PropTypes.number,
  className: PropTypes.string,
};
