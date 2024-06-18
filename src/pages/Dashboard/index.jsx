import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Statistics } from './Statistics';
import { getStatistics } from '../../features/redux/dashboard/operations';
import { refreshThunk } from '../../features/redux/auth/operations';
import { selectDashboardData } from '../../features/redux/dashboard/selectors';
import { Table } from '../../shared/ui/Table/Table';
import { nanoid } from 'nanoid';

export const Dashboard = () => {
  const dispatch = useDispatch();

  const data = useSelector(selectDashboardData);

  const customersTableData = {
    body: data?.recentCustomers,
  };
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);

  return (
    <div className="">
      <Statistics
        countOfProduct={data?.products}
        countOfSuppliers={data?.suppliers}
        countOfCustomers={data?.customers}
        className="mb-[40px]"
      />
      {/* <Table title="Recent Customers" tabelData={customersTableData} /> */}

      <div className="w-[700px]">
        <div className="rounded-t-[8px] bg-green-background p-[20px] text-[18px] font-[600] leading-[133%]">
          Recent Customers
        </div>

        <div className="rounded-b-[8px] bg-white p-[20px]  pt-0">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border-l-0 border-t-0 bg-white">Name</th>
                <th className="border-t-0 bg-white">Email</th>
                <th className="border-r-0 border-t-0 bg-white">Spent</th>
              </tr>
            </thead>
            <tbody>
              {customersTableData.body?.map((item, index, array) => {
                const isLast = index === array.length - 1;
                return (
                  <tr key={item._id}>
                    <td
                      className={` border-l-0 bg-white ${isLast ? 'border-b-0' : ''}`}
                    >
                      <div className="flex items-center gap-[8px]">
                        <img
                          src={item.image}
                          className="w-[36px]"
                          alt="customer"
                        />
                        <p>{item.name}</p>
                      </div>
                    </td>
                    <td className={`${isLast ? 'border-b-0' : ''}`}>
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
    </div>
  );
};
