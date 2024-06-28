import PropTypes from 'prop-types';
import {
  Cancelled,
  Completed,
  Confirmed,
  Delivered,
  Pending,
  Processing,
} from '../../shared/assets/icons/OrdersStatusIcons';
import imgPlaceholder from '../../shared/assets/images/png/placeholderPhoto.png';

export const OrdersTable = ({ data }) => {
  const statusIcons = {
    Completed: <Completed />,
    Confirmed: <Confirmed />,
    Shipped: <Pending />,
    Cancelled: <Cancelled />,
    Processing: <Processing />,
    Delivered: <Delivered />,
  };
  return (
    <div className="mt-[20px] mobile-sm:w-[675px] tablet:min-w-[960px] desktop:w-full">
      <div className="rounded-t-[8px] bg-green-background font-[600] leading-[133%] mobile-sm:p-[14px] mobile-sm:text-[16px] tablet:p-[20px] tablet:text-[18px]">
        All orders
      </div>

      <div className="rounded-b-[8px] bg-white p-[20px] pb-0 pt-0   ">
        <table
          className={`${data?.orders.length < 5 ? '' : 'h-[454px]'} w-full`}
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
                        src={item.photo ? item.photo : imgPlaceholder}
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
  );
};

OrdersTable.propTypes = {
  data: PropTypes.any,
};
