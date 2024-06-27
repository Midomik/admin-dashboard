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
import { PlusIcon } from '../../shared/assets/icons/PlusIcon';
import { PenIcon } from '../../shared/assets/icons/PenIcon';
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
    console.log(value);

    dispatch(getSuppliers({ name: value.filter, page: 1, limit: 5 }));
  };

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSuppliers({ page: 1, limit: 5, name: null }));
  }, [dispatch]);

  return (
    <div>
      <div className="mt-[75px] flex items-center justify-between">
        <Form variant="filter" submit={submit} isReset={false}>
          <Input name="filter" placeholder="Supplier Name" />
          <Button className="flex gap-[8px] leading-[129%]  text-white">
            <FilterIcon /> Filter
          </Button>
        </Form>

        <div className="flex items-center gap-[8px] text-[14px] leading-[129%]">
          <button
            onClick={() => dispatch(setIsOpenAddNewSupplierModal())}
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-green-accent "
          >
            <PlusIcon />
          </button>{' '}
          Add a new suppliers
        </div>
      </div>

      <div className="mt-[20px] w-full">
        <div className="rounded-t-[8px] bg-green-background p-[20px] text-[18px] font-[600] leading-[133%]">
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
                          className="flex h-[34px] items-center justify-center gap-[4px] rounded-[30px] border border-[#59b17a80] px-[17px] py-[10px] text-green-accent"
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
