import { StackOfCoinsIcon } from '../../shared/assets/icons/StackOfCoinsIcon';
import { PeopleIcon } from '../../shared/assets/icons/PeopleIcon';
import PropTypes from 'prop-types';

export const Statistics = ({
  countOfProduct,
  countOfSuppliers,
  countOfCustomers,
}) => {
  return (
    <div className="mt-[20px] flex gap-[20px]">
      <div className="w-[240px] rounded-[8px] border border-green-accent bg-white px-[14px] py-[8px]">
        <div className="mb-[28px] flex gap-[8px]">
          <StackOfCoinsIcon />
          <p>All products</p>
        </div>

        <h3></h3>
      </div>

      <div className="border-dark-0.1 w-[240px] rounded-[8px] border bg-white px-[14px] py-[8px]">
        <div className="mb-[28px] flex gap-[8px]">
          <PeopleIcon />
          <p>All suppliers</p>
        </div>

        <h3></h3>
      </div>

      <div className=" border-dark-0.1 w-[240px] rounded-[8px] border bg-white px-[14px] py-[8px]">
        <div className="mb-[28px] flex gap-[8px]">
          <PeopleIcon />
          <p>All customers</p>
        </div>

        <h3></h3>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  countOfProduct: PropTypes.string,
  countOfSuppliers: PropTypes.string,
  countOfCustomers: PropTypes.string,
};
