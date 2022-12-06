import { memo } from 'react';
import Logo from './Recruterlogo.svg';
import LogoSmall from './Logo_small.svg';

export const LogoIcon = memo(() => <Logo />);
export const LogoSmallIcon = memo(() => <LogoSmall />);
