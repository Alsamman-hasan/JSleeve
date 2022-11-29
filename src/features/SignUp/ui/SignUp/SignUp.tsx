import { classNames } from 'shared/lib/classNames/classNames';
import { HStack, VStack } from 'shared/ui/Stack';
import Logo from 'shared/assets/icons/logo.svg';
import FaceBook from 'shared/assets/icons/Facebook.svg';
import { Htag } from 'shared/ui/Htage/Htage';
import { PTag } from 'shared/ui/Paragraph/P';
import { InputUi, InputBtn } from 'shared/ui/Input';
import { DividerUi } from 'shared/ui/Divider/DividerUi';
import { ButtonUi } from 'shared/ui/Button/Button';
import { Layout } from 'shared/ui/Layout/Layout';
import { memo } from 'react';
import { Links } from 'shared/ui/Links/Links';
import cls from './SignUp.module.scss';

interface SignUpProps {
  className?: string;
}

export const SignUp = memo((props: SignUpProps) => {
  const { className } = props;

  return (
    <Layout>
      <VStack
        align="center"
        justify="center"
        gap={28}
        className={classNames(cls.SignUp, {}, [className])}
      >
        <Logo />
        <VStack align="center" justify="center" gap={12}>
          <Htag tage="h2" className={cls.header}>
            Sign Up
          </Htag>
          <PTag tage="14Reg" className={cls.subHeader}>
            Your Social Campaigns
          </PTag>
        </VStack>
        <InputBtn label="Sign in with Facebook" type="button" Icon={FaceBook} />
        <DividerUi text="Or with Email" />
        <VStack max align="center" justify="center" gap={16}>
          <InputUi className={cls.inputs} type="email" label="Email" />
          <InputUi type="password" label="Password" />
          <InputUi type="password" label="Password" />
        </VStack>
        <VStack max align="center" justify="center" gap={16}>
          <ButtonUi
            disabled
            className={cls.btn}
            theme="primary"
            size="L"
            layOut="TextOnly"
          >
            Sign Up
          </ButtonUi>
          <HStack gap={2}>
            <PTag className={cls.NotMember} tage="14Reg">
              Already have an Account?
            </PTag>
            <PTag className={cls.signUp} tage="14Reg">
              <Links to="/signIn">Sign in</Links>
            </PTag>
          </HStack>
        </VStack>
      </VStack>
    </Layout>
  );
});
