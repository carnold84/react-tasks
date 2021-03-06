import { ChangeEvent } from 'react';
import { Wrapper } from './TextField.styles';

type Props = {
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  type?: 'text' | 'textarea';
  value: string;
  [x: string]: any;
};

const TextField = ({ onChange, type = 'text', value, ...rest }: Props) => {
  return (
    <Wrapper
      component={type === 'textarea' ? 'textarea' : 'input'}
      minHeight={type === 'textarea' ? '100px' : null}
      onChange={onChange}
      type={'text'}
      value={value}
      variant={type === 'textarea' ? 'h6' : 'h2'}
      {...rest}
    />
  );
};

export default TextField;
