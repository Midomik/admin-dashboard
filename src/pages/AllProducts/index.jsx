import { useEffect } from 'react';
import { refreshThunk } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProduct,
  getProducts,
} from '../../redux/products/operations';
import {
  selectFilter,
  selectProductData,
} from '../../redux/products/selectors';

import { Form } from '../../shared/ui/Form';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { FilterIcon } from '../../shared/assets/icons/FilterIcon';
import { PaginationCicrcle } from '../../shared/assets/icons/PaginationCicrcle';
import { nanoid } from 'nanoid';
import { PlusIcon } from '../../shared/assets/icons/PlusIcon';
import { PenIcon } from '../../shared/assets/icons/PenIcon';
import { TrashIcon } from '../../shared/assets/icons/TrashIcon';
import {
  setIsOpenAddNewProductModal,
  setIsOpenEditProductModal,
} from '../../redux/products/reducer';
import { FormSuppliers } from '../AllSuppliers/FormSuppliers';
import { FormProduct } from './FormProduct';
import { ProductTable } from './ProductTable';

export const AllProducts = () => {
  const dispatch = useDispatch();

  const data = useSelector(selectProductData);
  const filterQuery = useSelector(selectFilter);

  const paginationCircles = [];
  for (let i = 0; i < data?.totalPages; i++) {
    paginationCircles.push(
      <div
        key={nanoid()}
        onClick={() =>
          dispatch(
            getProducts({
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
    dispatch(getProducts({ page: 1, limit: 5, name: null }));
  }, [dispatch]);

  return (
    <div className="overflow-x-scroll pb-[20px]">
      <FormProduct />

      <ProductTable data={data} />

      {data?.page && (
        <div className="mt-[20px] flex justify-center gap-[8px]">
          {paginationCircles}
        </div>
      )}
    </div>
  );
};
