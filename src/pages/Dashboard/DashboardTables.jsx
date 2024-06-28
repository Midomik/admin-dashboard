import {
  ErrorIcon,
  ExpenseIcon,
  IncimeIcon,
} from '../../shared/assets/icons/IncomeExpenseStatusIcons';
import PropTypes from 'prop-types';
import imgPlaceholder from '../../shared/assets/images/png/placeholderPhoto.png';

export const DashboardTables = ({ data }) => {
  const statusIcons = {
    Expense: <ExpenseIcon />,
    Income: <IncimeIcon />,
    Error: <ErrorIcon />,
  };
  return (
    <div className="flex gap-[20px] mobile-sm:flex-col desktop:flex-row">
      <div className="mobile-sm:w-full desktop:w-1/2">
        <div className="rounded-t-[8px] bg-green-background text-[18px] font-[600] leading-[133%] mobile-sm:p-[14px] tablet:p-[20px]">
          Recent Customers
        </div>

        <div className="rounded-b-[8px] bg-white p-[20px]  pb-0 pt-0">
          <table className="h-[454px] w-full">
            <thead>
              <tr>
                <th className="border-l-0 border-t-0 bg-white pl-0">Name</th>
                <th className="border-t-0 bg-white">Email</th>
                <th className="border-r-0 border-t-0 bg-white">Spent</th>
              </tr>
            </thead>
            <tbody>
              {data?.recentCustomers.map((item, index, array) => {
                const isLast = index === array.length - 1;
                return (
                  <tr key={item._id}>
                    <td
                      className={` border-l-0 bg-white pl-0 ${isLast ? 'border-b-0' : ''}`}
                    >
                      <div className="flex flex-wrap items-center gap-[8px]">
                        <img
                          src={item.image ? item.image : imgPlaceholder}
                          className="w-[36px]"
                          alt="customer"
                        />
                        <p>{item.name}</p>
                      </div>
                    </td>
                    <td
                      className={`${isLast ? 'border-b-0' : ''} max-w-[100px] truncate`}
                    >
                      {item.email}
                    </td>
                    <td className={`border-r-0 ${isLast ? 'border-b-0' : ''}`}>
                      {item.spent}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mobile-sm:w-full desktop:w-1/2">
        <div className="rounded-t-[8px] bg-green-background p-[20px] text-[18px] font-[600] leading-[133%]">
          Income/Expenses
        </div>

        <div className="rounded-b-[8px] bg-white p-[20px]  pb-0 pt-0">
          <table className="h-[454px] w-full">
            <thead>
              <tr>
                <th className="border-l-0 border-r-0 border-t-0 bg-white pl-0">
                  Today
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.incomeExpenses.map((item, index, array) => {
                const isLast = index === array.length - 1;
                return (
                  <tr key={item._id}>
                    <td
                      className={`border-l-0 border-r-0 bg-white pl-[0] ${isLast ? 'border-b-0' : ''}`}
                    >
                      {statusIcons[item.type]}
                    </td>

                    <td
                      className={`text-wrap	 border-l-0  border-r-0 ${isLast ? 'border-b-0' : ''}`}
                    >
                      {item.name}
                    </td>

                    <td
                      className={`border-l-0 border-r-0 ${isLast ? 'border-b-0' : ''} ${item.type === 'Expense' ? 'text-red-accent' : ''} ${item.type === 'Income' ? 'text-green-accent' : ''} ${item.type === 'Error' ? 'text-dark line-through' : ''}`}
                    >
                      {item.amount}
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

DashboardTables.propTypes = {
  data: PropTypes.any,
};
