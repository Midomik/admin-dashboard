import { Route, Routes } from 'react-router-dom';
import App from './App';
import {
  AllCustomers,
  AllProducts,
  AllSuppliers,
  Dashboard,
  Login,
  NotFound,
} from '../pages';
import { PrivateRoute } from '../app/providers/PrivateRoute';
import { PublicRoute } from '../app/providers/PublicRoute';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<PrivateRoute component={<Dashboard />} />} />
        <Route
          path="customers"
          element={<PrivateRoute component={<AllCustomers />} />}
        />
        <Route
          path="products"
          element={<PrivateRoute component={<AllProducts />} />}
        />
        <Route
          path="suppliers"
          element={<PrivateRoute component={<AllSuppliers />} />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="login" element={<PrivateRoute component={<Login />} />} />
    </Routes>
  );
};
