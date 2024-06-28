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
    <div className="relative h-[100vh] overflow-x-hidden py-[28px] mobile-sm:px-[20px] tablet:px-[32px] desktop:px-[100px]">
      <div className="flex items-center gap-[14px] text-[20px] font-[600] tracking-[-0.03em] mobile-sm:mb-[148px] tablet:mb-[204px] desktop:mb-[226px]">
        <img src={logo} alt="logotype" />
        <h2>E-Pharmacy</h2>
      </div>

      <div className="z-20 mb-[262px] flex items-center mobile-sm:flex-col mobile-sm:items-start mobile-sm:gap-[40px] tablet:gap-[50px] desktop:flex-row desktop:gap-[150px]">
        <div className="max-w-[614px]">
          <p className="relative font-[600] mobile-sm:text-[24px] mobile-sm:leading-[121%] tablet:text-[54px] tablet:leading-[111%]">
            Your medication,
            <span className="absolute mobile-sm:right-[10px] mobile-sm:top-[-65px] tablet:right-[20px] tablet:top-[-106px]">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${pill_webp} 1x, ${pill_2x_webp} 2x`}
                />
                <source type="image/png" srcSet={`${pill} 1x, ${pill_2x} 2x`} />
                <img
                  className="mobile-sm:w-[95px] tablet:w-[179px]"
                  srcSet={pill}
                  alt={'pill'}
                />
              </picture>
            </span>
            delivered Say goodbye to all{' '}
            <span className="text-green-accent">your healthcare</span> worries
            with us
          </p>
        </div>

        <div className="min-w-[323px]">
          <Form submit={submit} validationSchema={loginSchema}>
            <Input
              className="w-full"
              name="email"
              placeholder="Email address"
            />
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
      </div>

      <picture className=" talet:right-0 absolute z-[-10] mobile-sm:bottom-[-120px] mobile-sm:right-[-40px]  tablet:bottom-0">
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
