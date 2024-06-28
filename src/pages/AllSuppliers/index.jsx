import { useEffect } from 'react';
import { refreshThunk } from '../../features/redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getSuppliers } from '../../features/redux/suppliers/operations';
import {
  selectFilter,
  selectSupplierData,
} from '../../features/redux/suppliers/selectors';

import { Form } from '../../shared/ui/Form';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { FilterIcon } from '../../shared/assets/icons/FilterIcon';
import { PaginationCicrcle } from '../../shared/assets/icons/PaginationCicrcle';
import { nanoid } from 'nanoid';
import {
  setIsOpenAddNewSupplierModal,
  setIsOpenEditSupplierModal,
} from '../../features/redux/suppliers/reducer';
import {
  Active,
  Deactive,
} from '../../shared/assets/icons/SuppliersStatusIcon';
import { PenOnly } from '../../shared/assets/icons/PenOnly';

export const AllSuppliers = () => {
  const dispatch = useDispatch();

  const data = useSelector(selectSupplierData);
  const filterQuery = useSelector(selectFilter);

  const statusIcons = {
    Active: <Active />,
    Deactive: <Deactive />,
  };

  const paginationCircles = [];
  for (let i = 0; i < data?.totalPages; i++) {
    paginationCircles.push(
      <div
        key={nanoid()}
        onClick={() =>
          dispatch(
            getSuppliers({
              name: filterQuery !== null ? filterQuery : '',
              page: i + 1,
              limit: 5,
            })
          )
        }
      >
        <PaginationCicrcle isActive={data.page === i + 1} />
      </div>
    );
  }

  const submit = (value) => {

    dispatch(getSuppliers({ name: value.filter, page: 1, limit: 5 }));
  };

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSuppliers({ page: 1, limit: 5, name: null }));
  }, [dispatch]);

  return (
    <div className="overflow-x-scroll pb-[20px]">
      <div className=" flex justify-between  mobile-sm:mt-[40px] mobile-sm:flex-col mobile-sm:items-start mobile-sm:gap-[16px] tablet:mt-[50px] tablet:flex-row tablet:items-center tablet:gap-0">
        <Form variant="filter" submit={submit} isReset={false}>
          <Input name="filter" placeholder="User Name" />
          <Button className="flex gap-[8px] leading-[129%]  text-white">
            <FilterIcon /> Filter
          </Button>
        </Form>

        <button
          onClick={() => dispatch(setIsOpenAddNewSupplierModal())}
          className=" flex h-[44px] items-center justify-center rounded-[60px] border border-[#59b17a80] bg-transparent px-[30px] py-[13px] leading-[129%] hover:bg-[#59b17a99] mobile-sm:text-[12px] tablet:text-[14px] "
        >
          Add a new suppliers
        </button>
      </div>

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
                <th className="w-1/5 border-r-0 border-t-0 bg-white ">
                  Action
                </th>
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

      {data?.page && (
        <div className="mt-[20px] flex justify-center gap-[8px]">
          {paginationCircles}
        </div>
      )}
    </div>
  );
};
