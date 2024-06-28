import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenEditProductModal } from '../../redux/products/reducer';
import { TrashIcon } from '../../shared/assets/icons/TrashIcon';
import {
  deleteProduct,
  getProducts,
} from '../../redux/products/operations';
import { selectFilter } from '../../redux/products/selectors';
import { PenIcon } from '../../shared/assets/icons/PenIcon';

export const ProductTable = ({ data }) => {
  const dispatch = useDispatch();

  const filterQuery = useSelector(selectFilter);

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

  return (
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
              <th className="w-1/5 border-r-0 border-t-0 bg-white ">Action</th>
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
  );
};
ProductTable.propTypes = {
  data: PropTypes.any,
};
