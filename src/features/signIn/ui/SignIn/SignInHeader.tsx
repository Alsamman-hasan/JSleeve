import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import Logo from 'shared/assets/icons/logo.svg';
import { Htag } from 'shared/ui/Htage/Htage';
import { PTag } from 'shared/ui/Paragraph/P';
import cls from './SignIn.module.scss';

const LogoIcon = memo(() => <Logo />);

export const SignInHeader = memo(() => {
  return (
    <>
      <LogoIcon />
      <VStack align="center" justify="center" gap={12}>
        <Htag tage="h2" className={cls.header}>
          Sign In
        </Htag>
        <PTag tage="14Reg" className={cls.subHeader}>
          Your Social Campaigns
        </PTag>
      </VStack>
    </>
  );
});
