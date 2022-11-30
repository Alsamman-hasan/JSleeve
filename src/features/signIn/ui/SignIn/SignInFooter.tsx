import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import { PTag } from 'shared/ui/Paragraph/P';
import { Links } from 'shared/ui/Links/Links';
import cls from './SignIn.module.scss';

export const SignInFooter = memo(() => {
  return (
    <HStack gap={2}>
      <PTag className={cls.NotMember} tage="14Reg">
        Not a Member yet?{' '}
      </PTag>
      <PTag className={cls.signUp} tage="14Reg">
        <Links to="/signUp">Sign Up</Links>
      </PTag>
    </HStack>
  );
});
