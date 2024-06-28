import { Form } from '../../shared/ui/Form';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { FilterIcon } from '../../shared/assets/icons/FilterIcon';
import { getSuppliers } from '../../redux/suppliers/operations';
import { useDispatch } from 'react-redux';
import { setIsOpenAddNewSupplierModal } from '../../redux/suppliers/reducer';

export const FormSuppliers = () => {
  const dispatch = useDispatch();

  const submit = (value) => {
    dispatch(getSuppliers({ name: value.filter, page: 1, limit: 5 }));
  };
  return (
    <div className=" flex justify-between  mobile-sm:mt-[40px] mobile-sm:flex-col mobile-sm:items-start mobile-sm:gap-[16px] tablet:mt-[50px] tablet:flex-row tablet:items-center tablet:gap-0">
      <Form variant="filter" submit={submit}>
        <Input name="filter" placeholder="User Name" />
        <Button className="flex gap-[8px] leading-[129%]  text-white">
          <FilterIcon /> Filter
        </Button>
      </Form>

      <button
        onClick={() => dispatch(setIsOpenAddNewSupplierModal())}
        className=" flex h-[44px] items-center justify-center rounded-[60px] border border-[#59b17a80] bg-transparent px-[30px] py-[13px] leading-[129%] hover:bg-[#59b17a99] mobile-sm:text-[12px] tablet:text-[14px] "
      >
        Add a new suppliers
      </button>
    </div>
  );
};
