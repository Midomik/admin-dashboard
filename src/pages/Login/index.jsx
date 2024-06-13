import logo from '../../shared/assets/images/png/logo.png';
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

export const Login = () => {
  return (
    <div className=" relative px-[100px] py-[28px]">
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

        <div>
          <Form submit={(value) => console.log(value)}>
            <Input name="email" placeholder="Email address" />
            <Input
              name="password"
              placeholder="Password"
              eyeIcon={<EyeOffIcon />}
            />
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
          className="w-[179px]"
          srcSet={elements}
          alt={'decorative element'}
        />
      </picture>
    </div>
  );
};
