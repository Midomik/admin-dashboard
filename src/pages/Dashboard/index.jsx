import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Statistics } from './Statistics';
import { getStatistics } from '../../redux/dashboard/operations';
import { refreshThunk } from '../../redux/auth/operations';
import { selectDashboardData } from '../../redux/dashboard/selectors';

import { DashboardTables } from './DashboardTables';

export const Dashboard = () => {
  const dispatch = useDispatch();

  const data = useSelector(selectDashboardData);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);

  return (
    <div className="mb-[20px] mobile-sm:pr-[20px] tablet:pr-[32px] desktop:pr-[40px]">
      <Statistics
        countOfProduct={data?.products}
        countOfSuppliers={data?.suppliers}
        countOfCustomers={data?.customers}
        className="mb-[40px]"
      />

      <DashboardTables data={data} />
    </div>
  );
};
