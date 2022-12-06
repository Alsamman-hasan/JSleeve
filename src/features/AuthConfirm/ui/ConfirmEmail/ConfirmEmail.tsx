import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LogoIcon } from '@/shared/assets/icons/LogoIcon';
import { RoutesPaths } from '@/shared/config/routeConfig/routeConfig';
import { ButtonUi } from '@/shared/ui/Button/Button';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Layout } from '@/shared/ui/Layout/Layout';
import { Links } from '@/shared/ui/Links/Links';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ConfirmEmail.module.scss';

interface ConfirmEmailProps {
	className?: string;
}

// use RTk query for sendding new link
export const ConfirmEmail = memo((props: ConfirmEmailProps) => {
	const { className } = props;
	return (
		<Layout>
			<VStack
				align="center"
				justify="center"
				gap={1.75}
				className={classNames(cls.contetn, {}, [className])}
			>
				<LogoIcon />
				<Htag tage="h2" className={cls.header}>
					Check your email
				</Htag>
				<PTag tage="14Reg" className={cls.subHeader}>
					We have sent an email to name@ngmail.com. Please check your email,
					follow the instructions to verify your email address, and then click
					the button below to continue.
				</PTag>
				<VStack max align="center" justify="center" gap={1}>
					<ButtonUi
						layOut="TextOnly"
						theme="secondary"
						size="L"
						className={cls.btn}
					>
						Send a new link
					</ButtonUi>
					<HStack gap={0.125}>
						<PTag className={cls.mistake} tage="14Reg">
							Made a mistake with e-mail address?
						</PTag>
						<PTag className={cls.retToEmail} tage="14Reg">
							<Links to={RoutesPaths.signIn}>Return to Input E-mail</Links>
						</PTag>
					</HStack>
				</VStack>
			</VStack>
		</Layout>
	);
});
