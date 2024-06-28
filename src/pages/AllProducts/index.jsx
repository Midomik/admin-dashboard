import { useEffect } from 'react';
import { refreshThunk } from '../../features/redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProduct,
  getProducts,
} from '../../features/redux/products/operations';
import {
  selectFilter,
  selectProductData,
} from '../../features/redux/products/selectors';

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
} from '../../features/redux/products/reducer';

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

  const submit = (value) => {
    dispatch(getProducts({ name: value.filter, page: 1, limit: 5 }));
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
    dispatch(
      getProducts({
        page: data.page,
        limit: 5,
        name: filterQuery !== null ? filterQuery : '',
      })
    );
  };

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProducts({ page: 1, limit: 5, name: null }));
  }, [dispatch]);

  return (
    <div className="overflow-x-scroll pb-[20px]">
      <div className="flex justify-between mobile-sm:mt-[40px] mobile-sm:flex-col mobile-sm:items-start mobile-sm:gap-[18px] tablet:mt-[50px] tablet:flex-row tablet:items-center tablet:gap-0">
        <Form className="flex" variant="filter" submit={submit} isReset={false}>
          <Input
            name="filter"
            placeholder="Product Name"
            className="mobile-sm:w-[335px]"
          />
          <Button className="flex gap-[8px] leading-[129%] text-white mobile-sm:hidden  tablet:flex">
            <FilterIcon /> Filter
          </Button>
        </Form>

        <div className="flex items-center gap-[8px] text-[14px] leading-[129%]">
          <button
            onClick={() => dispatch(setIsOpenAddNewProductModal())}
            className=" flex min-h-[42px] min-w-[42px] items-center justify-center rounded-full bg-green-accent hover:bg-[#59b17a99]  "
          >
            <PlusIcon />
          </button>{' '}
          Add a new product
        </div>
      </div>

      <div className="mt-[20px] mobile-sm:min-w-[515px] tablet:min-w-[960px] desktop:w-full">
        <div className="w-full rounded-t-[8px] bg-green-background font-[600] leading-[133%] mobile-sm:p-[14px] mobile-sm:text-[16px] tablet:p-[20px] tablet:text-[18px]">
          All products
        </div>

        <div className="rounded-b-[8px] bg-white p-[20px]  pb-0 pt-0">
          <table
            className={`${data?.products.length < 5 ? '' : 'h-[454px]'} w-full}`}
          >
            <thead className="">
              <tr>
                <th className="w-1/5 border-l-0 border-t-0 bg-white pl-0">
                  Product Info
                </th>
                <th className="w-1/5 border-t-0 bg-white">Category</th>
                <th className="w-1/5 border-t-0 bg-white">Stock</th>
                <th className="w-1/5 border-t-0 bg-white">Suppliers</th>
                <th className="w-1/5 border-t-0 bg-white">Price</th>
                <th className="w-1/5 border-r-0 border-t-0 bg-white ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.products.map((item, index, array) => {
                const isLast = index === array.length - 1;
                return (
                  <tr key={nanoid()}>
                    <td
                      className={` border-l-0 bg-white pl-0 ${isLast ? 'border-b-0' : ''}`}
                    >
                      {item.name}
                    </td>

                    <td className={`${isLast ? 'border-b-0' : ''}`}>
                      {item.category}
                    </td>

                    <td className={`border-r-0 ${isLast ? 'border-b-0' : ''}`}>
                      {item.stock}
                    </td>

                    <td className={`border-r-0 ${isLast ? 'border-b-0' : ''}`}>
                      {item.suppliers}
                    </td>

                    <td className={`border-r-0 ${isLast ? 'border-b-0' : ''}`}>
                      {item.price}
                    </td>

                    <td className={`border-r-0 ${isLast ? 'border-b-0' : ''} `}>
                      <div className="flex gap-[8px]">
                        <div
                          onClick={() =>
                            dispatch(setIsOpenEditProductModal(item))
                          }
                          className=" rounded-full border border-[#59b17a80] p-[8px] hover:bg-[#59b17a99]"
                        >
                          <PenIcon />
                        </div>

                        <div
                          onClick={() => handleDeleteProduct(item._id)}
                          className="rounded-full border border-[#e8505080] p-[8px] hover:bg-[#e8505099]"
                        >
                          <TrashIcon />
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
