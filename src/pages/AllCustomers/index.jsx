import { useEffect } from 'react';
import { refreshThunk } from '../../features/redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomers } from '../../features/redux/customers/operations';
import {
  selectFilter,
  selectCustomerData,
} from '../../features/redux/customers/selectors';

import { Form } from '../../shared/ui/Form';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { FilterIcon } from '../../shared/assets/icons/FilterIcon';
import { PaginationCicrcle } from '../../shared/assets/icons/PaginationCicrcle';
import { nanoid } from 'nanoid';

export const AllCustomers = () => {
  const dispatch = useDispatch();

  const data = useSelector(selectCustomerData);
  const filterQuery = useSelector(selectFilter);

  const paginationCircles = [];
  for (let i = 0; i < data?.totalPages; i++) {
    paginationCircles.push(
      <div
        key={nanoid()}
        onClick={() =>
          dispatch(
            getCustomers({
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

    dispatch(getCustomers({ name: value.filter, page: 1, limit: 5 }));
  };

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCustomers({ page: 1, limit: 5, name: null }));
  }, [dispatch]);

  return (
    <div className="overflow-x-scroll pb-[20px]">
      <div className="flex items-center justify-between mobile-sm:mt-[40px] tablet:mt-[50px]">
        <Form variant="filter" submit={submit} isReset={false}>
          <Input name="filter" placeholder="User Name" />
          <Button className="flex gap-[8px] leading-[129%]  text-white">
            <FilterIcon /> Filter
          </Button>
        </Form>
      </div>

      <div className="mt-[20px] mobile-sm:min-w-[670px] tablet:min-w-[960px] desktop:w-full">
        <div className=" rounded-t-[8px] bg-green-background font-[600] leading-[133%]  mobile-sm:p-[14px] mobile-sm:text-[16px] tablet:p-[20px] tablet:text-[18px]">
          Customers Data
        </div>

        <div className="rounded-b-[8px] bg-white p-[20px]  pb-0 pt-0">
          <table
            className={`${data?.customers.length < 5 ? '' : 'h-[454px]'} w-full}`}
          >
            <thead className="">
              <tr>
                <th className="w-1/5 border-l-0 border-t-0 bg-white pl-0">
                  User Info
                </th>
                <th className="w-1/5 border-t-0 bg-white">Email</th>
                <th className="w-1/4 border-t-0 bg-white">Address</th>
                <th className="w-1/5 border-t-0 bg-white">Phone</th>
                <th className="w-1/6 border-r-0 border-t-0 bg-white">
                  Register date
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.customers.map((item, index, array) => {
                const isLast = index === array.length - 1;
                return (
                  <tr key={item._id}>
                    <td
                      className={` border-l-0 bg-white pl-0 ${isLast ? 'border-b-0' : ''}`}
                    >
                      <div className="flex flex-wrap items-center gap-[8px]">
                        <img
                          src={item.image}
                          className="h-[36px] w-[36px]"
                          alt="customer"
                        />
                        <p>{item.name}</p>
                      </div>
                    </td>

                    <td className={`${isLast ? 'border-b-0' : ''}`}>
                      {item.email}
                    </td>

                    <td className={`border-r-0 ${isLast ? 'border-b-0' : ''}`}>
                      {item.address}
                    </td>

                    <td className={`border-r-0 ${isLast ? 'border-b-0' : ''}`}>
                      {item.phone}
                    </td>

                    <td className={`border-r-0 ${isLast ? 'border-b-0' : ''}`}>
                      {item.register_date}
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
