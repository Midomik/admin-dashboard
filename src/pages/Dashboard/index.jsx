import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Statistics } from './Statistics';
import { getStatistics } from '../../features/redux/dashboard/operations';
import { refreshThunk } from '../../features/redux/auth/operations';

export const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);

  return (
    <div className="">
      <Statistics />
    </div>
  );
};
