import { useEffect } from 'react';
import { refreshThunk } from '../../features/redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../features/redux/orders/operations';
import { selectOrderData } from '../../features/redux/orders/selectors';
import {
  Cancelled,
  Completed,
  Confirmed,
  Pending,
  Processing,
} from '../../shared/assets/icons/OrdersStatusIcons';

export const AllOrders = () => {
  const dispatch = useDispatch();

  const data = useSelector(selectOrderData);

  const statusIcons = {
    Completed: <Completed />,
    Delivered: <Confirmed />,
    Shipped: <Pending />,
    Cancelled: <Cancelled />,
    Processing: <Processing />,
  };

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOrder({ page: 2, limit: 5 }));
  }, [dispatch]);

  return (
    <div>
      <input className="h-[40px] border border-dark" type="text" />

      <div className="mt-[20px] w-full">
        <div className="rounded-t-[8px] bg-green-background p-[20px] text-[18px] font-[600] leading-[133%]">
          All orders
        </div>

        <div className="rounded-b-[8px] bg-white p-[20px]  pb-0 pt-0">
          <table className="h-[454px] w-full">
            <thead>
              <tr>
                <th className="border-l-0 border-t-0 bg-white pl-0">
                  User Info
                </th>
                <th className="border-t-0 bg-white">Address</th>
                <th className="border-t-0 bg-white">Products</th>
                <th className="border-t-0 bg-white">Order date</th>
                <th className="border-t-0 bg-white">Price</th>
                <th className="border-r-0 border-t-0 bg-white">Status</th>
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
                          className="w-[36px]"
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
    </div>
  );
};
