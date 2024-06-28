import PropTypes from 'prop-types';
import imgPlaceholder from '../../shared/assets/images/png/placeholderPhoto.png';

export const CustomersTable = ({ data }) => {
  return (
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
                        src={item.image ? item.image : imgPlaceholder}
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
  );
};
CustomersTable.propTypes = {
  data: PropTypes.any,
};
