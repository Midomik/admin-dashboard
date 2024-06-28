import { Form } from '../../shared/ui/Form';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { FilterIcon } from '../../shared/assets/icons/FilterIcon';
import { useDispatch } from 'react-redux';
import { getOrder } from '../../redux/orders/operations';

export const FormOrder = () => {
  const dispatch = useDispatch();

  const submit = (value) => {
    dispatch(getOrder({ name: value.filter, page: 1, limit: 5 }));
  };
  return (
    <div className="flex items-center justify-between mobile-sm:mt-[40px] tablet:mt-[50px]">
      <Form variant="filter" submit={submit}>
        <Input name="filter" placeholder="Product Name" />
        <Button className="flex gap-[8px] leading-[129%] text-white">
          <FilterIcon /> Filter
        </Button>
      </Form>
    </div>
  );
};
