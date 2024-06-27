import PropTypes from 'prop-types';
import logo from '../../shared/assets/images/png/logo.png';
import { LogOutIcon } from '../assets/icons/LogOutIcon';
import { NavLink, useLocation } from 'react-router-dom';
import { CustomersIcon } from '../assets/icons/CustomersIcon';
import { SuppliersIcon } from '../assets/icons/SuppliersIcon';
import { ProductsIcon } from '../assets/icons/ProductsIcon';
import { OrdersIcon } from '../assets/icons/OrdersIcon';
import { DashboardIcon } from '../assets/icons/DashboardIcon';
import { useDispatch, useSelector } from 'react-redux';
import {
  logOutThunk,
  refreshThunk,
} from '../../features/redux/auth/operations';
import { Modal } from '../ui/Modal';
import {
  selectIsOpenAddNewProductModal,
  selectIsOpenEditProductModal,
} from '../../features/redux/products/selectors';
import {
  selectIsOpenAddNewSupplierModal,
  selectIsOpenEditSupplierModal,
} from '../../features/redux/suppliers/selectors';
import { BurgerMenu } from '../assets/icons/BurgerMenu';
import { selectisOpenSideHeaderModal } from '../../features/redux/dashboard/selectors';
import { setIsOpenSideHeaderModal } from '../../features/redux/dashboard/reducer';
import { useEffect } from 'react';
import { selectUserData } from '../../features/redux/auth/selectors';

export const SharedLayout = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const userData = useSelector(selectUserData);
  console.log(userData);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  const isOpenAddNewProductModal = useSelector(selectIsOpenAddNewProductModal);
  const isOpenEditProductModal = useSelector(selectIsOpenEditProductModal);
  const isOpenAddNewSuppliers = useSelector(selectIsOpenAddNewSupplierModal);
  const isOpenEditSupplierModal = useSelector(selectIsOpenEditSupplierModal);
  const isOpenSideHeaderModal = useSelector(selectisOpenSideHeaderModal);

  const page =
    location.pathname === '/'
      ? 'Dashboard'
      : location.pathname.substring(1).charAt(0).toUpperCase() +
        location.pathname.substring(2);

  return (
    <div className="">
      <header className="flex items-center border border-r-0 border-b-dark-0.1">
        <div
          onClick={() => dispatch(setIsOpenSideHeaderModal())}
          className="ml-[32px] mobile-sm:block desktop:hidden"
        >
          <BurgerMenu />
        </div>
        <img
          src={logo}
          alt="logotype"
          className="m-[20px] h-[40px] w-[40px] "
        />

        <div className="flex w-full justify-between py-[15px] mobile-sm:pl-0 desktop:px-[40px]">
          <div className="">
            <h3 className="mb-[4px] font-[600] leading-[117%] mobile-sm:text-[20px] tablet:text-[24px]">
              Medecine store
            </h3>
            <p className="font-[400] text-dark-0.4">
              {page} | {userData?.user.email}
            </p>
          </div>

          <button
            onClick={() => dispatch(logOutThunk())}
            className=" flex h-[44px] w-[44px] items-center justify-center rounded-full bg-green-accent mobile-sm:hidden desktop:flex"
          >
            <LogOutIcon />
          </button>
        </div>
      </header>

      <div className="flex">
        <aside className="flex h-[100vh] flex-col gap-[14px] border border-r-dark-0.1 border-t-transparent px-[18px] py-[40px] mobile-sm:hidden desktop:block">
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

        <main className="tablet:px[32px] w-full mobile-sm:px-[20px] mobile-sm:pr-0  desktop:px-[40px]">
          {children}
        </main>
      </div>
      {isOpenAddNewProductModal && <Modal variant="addProduct" />}
      {isOpenEditProductModal && <Modal variant="editProduct" />}
      {isOpenAddNewSuppliers && <Modal variant="addSupplier" />}
      {isOpenEditSupplierModal && <Modal variant="editSupplier" />}

      {isOpenSideHeaderModal && <Modal modal="sideBar" variant="sideBar" />}
    </div>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
