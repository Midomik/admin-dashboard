import { useState } from 'react';
import { loginSchema } from '../../shared/ui/Form/shemas/loginSchema';
import { Form } from '../../shared/ui/Form';
import { Input } from '../../shared/ui/Input';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import { EyeOnIcon } from '../../shared/assets/icons/EyeOnIcon';
import { EyeOffIcon } from '../../shared/assets/icons/EyeOffIcon';
import { Button } from '../../shared/ui/Button';

export const FormLogin = () => {
  const dispatch = useDispatch();

  const [isVisiblePassword, setIsvisiblePassword] = useState(false);

  const checkPassword = (value) => {
    setIsvisiblePassword(value);
  };

  const submit = (value) => {
    dispatch(loginThunk(value));
  };
  return (
    <div className="min-w-[323px]">
      <Form submit={submit} validationSchema={loginSchema}>
        <Input className="w-full" name="email" placeholder="Email address" />
        <Input
          className="w-full"
          name="password"
          placeholder="Password"
          type={isVisiblePassword ? 'text' : 'password'}
          eyeIcon={isVisiblePassword ? <EyeOnIcon /> : <EyeOffIcon />}
          checkPassword={checkPassword}
        />
        <Button className="bg-green-accent text-white">Log in</Button>
      </Form>
    </div>
  );
};
