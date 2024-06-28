import { useEffect } from 'react';
import { refreshThunk } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../redux/orders/operations';
import {
  selectFilter,
  selectOrderData,
} from '../../redux/orders/selectors';

import { PaginationCicrcle } from '../../shared/assets/icons/PaginationCicrcle';
import { nanoid } from 'nanoid';
import { OrdersTable } from './OrdersTable';
import { FormOrder } from './FormOrder';

export const AllOrders = () => {
  const dispatch = useDispatch();

  const data = useSelector(selectOrderData);
  const filterQuery = useSelector(selectFilter);

  const paginationCircles = [];
  for (let i = 0; i < data?.totalPages; i++) {
    paginationCircles.push(
      <div
        key={nanoid()}
        onClick={() =>
          dispatch(
            getOrder({
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
    dispatch(getOrder({ page: 1, limit: 5, name: null }));
  }, [dispatch]);

  return (
    <div className="overflow-x-scroll pb-[20px]">
      <FormOrder />

      <OrdersTable data={data} />

      {data?.page && (
        <div className="mt-[20px] flex justify-center gap-[8px]">
          {paginationCircles}
        </div>
      )}
    </div>
  );
};
