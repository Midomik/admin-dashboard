import logo from '../../shared/assets/images/png/logo-login.png';
import pill from '../../shared/assets/images/png/white-round-pill.png';
import pill_2x from '../../shared/assets/images/png/white-round-pill@2x.png';
import pill_webp from '../../shared/assets/images/webp/white-round-pill.webp';
import pill_2x_webp from '../../shared/assets/images/webp/white-round-pill@2x.webp';

import elements from '../../shared/assets/images/png/elements.png';
import elements_2x from '../../shared/assets/images/png/elements@2x.png';
import elements_webp from '../../shared/assets/images/webp/elements.webp';
import elements_2x_webp from '../../shared/assets/images/webp/elements@2x.webp';
import { Form } from '../../shared/ui/Form';
import { Input } from '../../shared/ui/Input';
import { EyeOffIcon } from '../../shared/assets/icons/EyeOffIcon';
import { useState } from 'react';
import { EyeOnIcon } from '../../shared/assets/icons/EyeOnIcon';
import { Button } from '../../shared/ui/Button';
import { loginSchema } from '../../shared/ui/Form/shemas/loginSchema';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../features/redux/auth/operations';

export const Login = () => {
  const dispatch = useDispatch();

  const [isVisiblePassword, setIsvisiblePassword] = useState(false);

  const checkPassword = (value) => {
    setIsvisiblePassword(value);
  };

  const submit = (value) => {
    dispatch(loginThunk(value));
    console.log(value);
  };

  return (
    <div className=" relative h-[100vh] px-[100px] py-[28px]">
      <div className="mb-[226px] flex items-center gap-[14px] text-[20px] font-[600] tracking-[-0.03em]">
        <img src={logo} alt="logotype" />
        <h2>E-Pharmacy</h2>
      </div>

      <div className="mb-[262px] flex items-center gap-[150px]">
        <div className="max-w-[614px]">
          <p className="relative text-[54px] font-[600] leading-[111%]">
            Your medication,
            <span className="absolute right-[20px] top-[-106px]">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${pill_webp} 1x, ${pill_2x_webp} 2x`}
                />
                <source type="image/png" srcSet={`${pill} 1x, ${pill_2x} 2x`} />
                <img className="w-[179px]" srcSet={pill} alt={'pill'} />
              </picture>
            </span>
            delivered Say goodbye to all{' '}
            <span className="text-green-accent">your healthcare</span> worries
            with us
          </p>
        </div>

        <div className="min-w-[323px]">
          <Form submit={submit} validationSchema={loginSchema}>
            <Input name="email" placeholder="Email address" />
            <Input
              name="password"
              placeholder="Password"
              type={isVisiblePassword ? 'text' : 'password'}
              eyeIcon={isVisiblePassword ? <EyeOnIcon /> : <EyeOffIcon />}
              checkPassword={checkPassword}
            />
            <Button className="bg-green-accent text-white">Log in</Button>
          </Form>
        </div>
      </div>

      <picture className="absolute bottom-0 right-0">
        <source
          type="image/webp"
          srcSet={`${elements_webp} 1x, ${elements_2x_webp} 2x`}
        />
        <source type="image/png" srcSet={`${elements} 1x, ${elements_2x} 2x`} />
        <img
          className="w-[290px]"
          srcSet={elements}
          alt={'decorative element'}
        />
      </picture>
    </div>
  );
};
