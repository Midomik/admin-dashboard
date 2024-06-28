import { useEffect } from 'react';
import { refreshThunk } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getSuppliers } from '../../redux/suppliers/operations';
import {
  selectFilter,
  selectSupplierData,
} from '../../redux/suppliers/selectors';

import { PaginationCicrcle } from '../../shared/assets/icons/PaginationCicrcle';
import { nanoid } from 'nanoid';

import { SuppliersTable } from './SuppliersTable';
import { FormSuppliers } from './FormSuppliers';

export const AllSuppliers = () => {
  const dispatch = useDispatch();

  const data = useSelector(selectSupplierData);
  const filterQuery = useSelector(selectFilter);

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

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSuppliers({ page: 1, limit: 5, name: null }));
  }, [dispatch]);

  return (
    <div className="overflow-x-scroll pb-[20px]">
      <FormSuppliers />

      <SuppliersTable data={data} />

      {data?.page && (
        <div className="mt-[20px] flex justify-center gap-[8px]">
          {paginationCircles}
        </div>
      )}
    </div>
  );
};
