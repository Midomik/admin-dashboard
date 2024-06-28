import PropTypes from 'prop-types';
import {
  Active,
  Deactive,
} from '../../shared/assets/icons/SuppliersStatusIcon';
import { useDispatch } from 'react-redux';
import { setIsOpenEditSupplierModal } from '../../redux/suppliers/reducer';
import { PenOnly } from '../../shared/assets/icons/PenOnly';

export const SuppliersTable = ({ data }) => {
  const dispatch = useDispatch();
  const statusIcons = {
    Active: <Active />,
    Deactive: <Deactive />,
  };
  return (
    <div className="mt-[20px] mobile-sm:min-w-[680px] tablet:min-w-[960px] desktop:w-full">
      <div className=" w-full rounded-t-[8px] bg-green-background font-[600] leading-[133%]  mobile-sm:p-[14px] mobile-sm:text-[16px] tablet:p-[20px] tablet:text-[18px]">
        All Suppliers
      </div>

      <div className="rounded-b-[8px] bg-white p-[20px]  pb-0 pt-0">
        <table
          className={`${data?.suppliers.length < 5 ? '' : 'h-[454px]'} w-full}`}
        >
          <thead className="">
            <tr>
              <th className="w-1/5 border-l-0 border-t-0 bg-white pl-0">
                Suppliers Info
              </th>
              <th className="w-1/5 border-t-0 bg-white">Address</th>
              <th className="w-1/5 border-t-0 bg-white">Company</th>
              <th className="w-1/5 border-t-0 bg-white">Delivery date</th>
              <th className="w-1/5 border-t-0 bg-white">Amount</th>
              <th className="w-1/5 border-t-0 bg-white">Status</th>
              <th className="w-1/5 border-r-0 border-t-0 bg-white ">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.suppliers.map((item, index, array) => {
              const isLast = index === array.length - 1;
              return (
                <tr key={item._id}>
                  <td
                    className={` border-l-0 bg-white pl-0 ${isLast ? 'border-b-0' : ''}`}
                  >
                    {item.name}
                  </td>

                  <td className={`${isLast ? 'border-b-0' : ''}`}>
                    {item.address}
                  </td>

                  <td className={`border-r-0 ${isLast ? 'border-b-0' : ''}`}>
                    {item.suppliers}
                  </td>

                  <td className={`border-r-0 ${isLast ? 'border-b-0' : ''}`}>
                    {item.date}
                  </td>

                  <td className={`border-r-0 ${isLast ? 'border-b-0' : ''}`}>
                    {item.amount}
                  </td>

                  <td className={`border-r-0 ${isLast ? 'border-b-0' : ''}`}>
                    {statusIcons[item.status]}
                  </td>

                  <td className={`border-r-0 ${isLast ? 'border-b-0' : ''} `}>
                    <div className="flex gap-[8px]">
                      <div
                        onClick={() =>
                          dispatch(setIsOpenEditSupplierModal(item))
                        }
                        className=" flex h-[34px] cursor-default items-center justify-center gap-[4px] rounded-[30px]  border border-[#59b17a80] px-[17px] py-[10px] text-green-accent hover:bg-[#59b17a99] mobile-sm:text-[12px] tablet:text-[14px]"
                      >
                        <PenOnly /> Edit
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

SuppliersTable.propTypes = {
  data: PropTypes.any,
};
