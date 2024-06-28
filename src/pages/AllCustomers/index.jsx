import { useEffect } from 'react';
import { refreshThunk } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomers } from '../../redux/customers/operations';
import {
  selectFilter,
  selectCustomerData,
} from '../../redux/customers/selectors';

import { Form } from '../../shared/ui/Form';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { FilterIcon } from '../../shared/assets/icons/FilterIcon';
import { PaginationCicrcle } from '../../shared/assets/icons/PaginationCicrcle';
import { nanoid } from 'nanoid';
import { FormCustomers } from './FormCustomers';
import { CustomersTable } from './CustomersTable';

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

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCustomers({ page: 1, limit: 5, name: null }));
  }, [dispatch]);

  return (
    <div className="overflow-x-scroll pb-[20px]">
      <FormCustomers />

      <CustomersTable data={data} />

      {data?.page && (
        <div className="mt-[20px] flex justify-center gap-[8px]">
          {paginationCircles}
        </div>
      )}
    </div>
  );
};
