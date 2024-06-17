import PropTypes from 'prop-types';
import logo from '../../shared/assets/images/png/logo.png';
import { LogOutIcon } from '../assets/icons/LogOutIcon';
import { NavLink, useLocation } from 'react-router-dom';
import { CustomersIcon } from '../assets/icons/CustomersIcon';
import { SuppliersIcon } from '../assets/icons/SuppliersIcon';
import { ProductsIcon } from '../assets/icons/ProductsIcon';
import { OrdersIcon } from '../assets/icons/OrdersIcon';
import { DashboardIcon } from '../assets/icons/DashboardIcon';
import { useDispatch } from 'react-redux';
import { logOutThunk } from '../../features/redux/auth/operations';

export const SharedLayout = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const page =
    location.pathname === '/'
      ? 'Dashboard'
      : location.pathname.substring(1).charAt(0).toUpperCase() +
        location.pathname.substring(2);

  return (
    <div className="">
      <header className="border-b-dark-0.1 flex border border-r-0">
        <img
          src={logo}
          alt="logotype"
          className="m-[20px] h-[40px] w-[40px] "
        />

        <div className="flex w-full justify-between px-[40px] py-[15px]">
          <div>
            <h3 className="mb-[4px] text-[24px] font-[600] leading-[117%]">
              Medecine store
            </h3>
            <p className="font-[400] text-dark-0.4">
              {page} | {'krastikrabbs9234@gmail.com'}
            </p>
          </div>

          <button
            onClick={() => dispatch(logOutThunk())}
            className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-green-accent"
          >
            <LogOutIcon />
          </button>
        </div>
      </header>

      <div className="flex">
        <aside className="border-r-dark-0.1 flex h-[100vh] flex-col gap-[14px] border border-t-transparent px-[18px] py-[40px]">
          <NavLink
            to="/"
            className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white"
          >
            {({ isActive }) => <DashboardIcon isActive={isActive} />}
          </NavLink>
          <NavLink
            to="/orders"
            className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white"
          >
            {({ isActive }) => <OrdersIcon isActive={isActive} />}
          </NavLink>
          <NavLink
            to="/products"
            className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white"
          >
            {({ isActive }) => <ProductsIcon isActive={isActive} />}
          </NavLink>
          <NavLink
            to="/suppliers"
            className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white"
          >
            {({ isActive }) => <SuppliersIcon isActive={isActive} />}
          </NavLink>
          <NavLink
            to="/customers"
            className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white"
          >
            {({ isActive }) => <CustomersIcon isActive={isActive} />}
          </NavLink>
        </aside>
        <main className="px-[40px]">{children}</main>
      </div>
    </div>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
