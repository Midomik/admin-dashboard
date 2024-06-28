import { FilterIcon } from '../../shared/assets/icons/FilterIcon';
import { Button } from '../../shared/ui/Button';
import { Input } from '../../shared/ui/Input';
import { Form } from '../../shared/ui/Form';
import { useDispatch } from 'react-redux';
import { getCustomers } from '../../redux/customers/operations';

export const FormCustomers = () => {
  const dispatch = useDispatch();

  const submit = (value) => {
    dispatch(getCustomers({ name: value.filter, page: 1, limit: 5 }));
  };
  return (
    <div className="flex items-center justify-between mobile-sm:mt-[40px] tablet:mt-[50px]">
      <Form variant="filter" submit={submit}>
        <Input name="filter" placeholder="User Name" />
        <Button className="flex gap-[8px] leading-[129%]  text-white">
          <FilterIcon /> Filter
        </Button>
      </Form>
    </div>
  );
};
