import { useEffect } from 'react';
import { refreshThunk } from '../../features/redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../features/redux/orders/operations';
import {
  selectFilter,
  selectOrderData,
} from '../../features/redux/orders/selectors';
import {
  Cancelled,
  Completed,
  Confirmed,
  Delivered,
  Pending,
  Processing,
} from '../../shared/assets/icons/OrdersStatusIcons';
import { Form } from '../../shared/ui/Form';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { FilterIcon } from '../../shared/assets/icons/FilterIcon';
import { PaginationCicrcle } from '../../shared/assets/icons/PaginationCicrcle';
import { nanoid } from 'nanoid';

export const AllOrders = () => {
  const dispatch = useDispatch();

  const data = useSelector(selectOrderData);
  const filterQuery = useSelector(selectFilter);

  const statusIcons = {
    Completed: <Completed />,
    Confirmed: <Confirmed />,
    Shipped: <Pending />,
    Cancelled: <Cancelled />,
    Processing: <Processing />,
    Delivered: <Delivered />,
  };

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

  const submit = (value) => {
    console.log(value);

    dispatch(getOrder({ name: value.filter, page: 1, limit: 5 }));
  };

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOrder({ page: 1, limit: 5, name: null }));
  }, [dispatch]);

  return (
    <div>
      <div className="mt-[75px] flex items-center justify-between">
        <Form variant="filter" submit={submit} isReset={false}>
          <Input name="filter" placeholder="Product Name" />
          <Button className="flex gap-[8px] leading-[129%]  text-white">
            <FilterIcon /> Filter
          </Button>
        </Form>

        {/* <div className="flex items-center gap-[8px] text-[14px] leading-[129%]">
          <button className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-green-accent ">
            <PlusIcon />
          </button>{' '}
          Add a new product
        </div> */}
      </div>

      <div className="mt-[20px] w-full">
        <div className="rounded-t-[8px] bg-green-background p-[20px] text-[18px] font-[600] leading-[133%]">
          All orders
        </div>

        <div className="rounded-b-[8px] bg-white p-[20px]  pb-0 pt-0">
          <table
            className={`${data?.orders.length < 5 ? '' : 'h-[454px]'} w-full}`}
          >
            <thead>
              <tr>
                <th className="w-1/5 border-l-0 border-t-0 bg-white pl-0">
                  User Info
                </th>
                <th className="w-1/5 border-t-0 bg-white">Address</th>
                <th className="w-1/5 border-t-0 bg-white">Products</th>
                <th className="w-1/5 border-t-0 bg-white">Order date</th>
                <th className="w-1/5 border-t-0 bg-white">Price</th>
                <th className="w-1/5 border-r-0 border-t-0 bg-white">Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.orders.map((item, index, array) => {
                const isLast = index === array.length - 1;
                return (
                  <tr key={item._id}>
                    <td
                      className={` border-l-0 bg-white pl-0 ${isLast ? 'border-b-0' : ''}`}
                    >
                      <div className="flex items-center gap-[8px]">
                        <img
                          src={item.photo}
                          className="h-[36px] w-[36px]"
                          alt="customer"
                        />
                        <p>{item.name}</p>
                      </div>
                    </td>

                    <td className={`${isLast ? 'border-b-0' : ''}`}>
                      {item.address}
                    </td>

                    <td className={`border-r-0 ${isLast ? 'border-b-0' : ''}`}>
                      {item.products}
                    </td>

                    <td className={`border-r-0 ${isLast ? 'border-b-0' : ''}`}>
                      {item.order_date}
                    </td>

                    <td className={`border-r-0 ${isLast ? 'border-b-0' : ''}`}>
                      {item.price}
                    </td>

                    <td className={`border-r-0 ${isLast ? 'border-b-0' : ''}`}>
                      {statusIcons[item.status]}
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
