import { ReactNode } from 'react';
import { Wrapper } from './ActionBar.styles';

type Props = {
  children: ReactNode;
  [x: string]: any;
};

const ActionBar = ({ children, ...rest }: Props) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default ActionBar;
