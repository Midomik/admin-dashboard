import { useDispatch } from 'react-redux';
import { FilterIcon } from '../../shared/assets/icons/FilterIcon';
import { PlusIcon } from '../../shared/assets/icons/PlusIcon';
import { Button } from '../../shared/ui/Button';
import { Form } from '../../shared/ui/Form';
import { Input } from '../../shared/ui/Input';
import { getProducts } from '../../redux/products/operations';
import { setIsOpenAddNewProductModal } from '../../redux/products/reducer';

export const FormProduct = () => {
  const dispatch = useDispatch();

  const submit = (value) => {
    dispatch(getProducts({ name: value.filter, page: 1, limit: 5 }));
  };
  return (
    <div className="flex justify-between mobile-sm:mt-[40px] mobile-sm:flex-col mobile-sm:items-start mobile-sm:gap-[18px] tablet:mt-[50px] tablet:flex-row tablet:items-center tablet:gap-0">
      <Form className="flex" variant="filter" submit={submit}>
        <Input name="filter" placeholder="Product Name" />
        <Button className="flex gap-[8px] leading-[129%] text-white mobile-sm:hidden  tablet:flex">
          <FilterIcon /> Filter
        </Button>
      </Form>

      <div className="flex items-center gap-[8px] text-[14px] leading-[129%]">
        <button
          onClick={() => dispatch(setIsOpenAddNewProductModal())}
          className=" flex min-h-[42px] min-w-[42px] items-center justify-center rounded-full bg-green-accent hover:bg-[#59b17a99]  "
        >
          <PlusIcon />
        </button>{' '}
        Add a new product
      </div>
    </div>
  );
};
