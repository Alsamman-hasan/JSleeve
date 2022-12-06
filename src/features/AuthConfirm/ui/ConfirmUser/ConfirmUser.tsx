import { memo, useCallback } from 'react';
import { LogoIcon } from '@/shared/assets/icons/LogoIcon';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonUi } from '@/shared/ui/Button/Button';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Layout } from '@/shared/ui/Layout/Layout';

import CheckSuccessIcon from '@/shared/assets/icons/CheckSuccess.svg';
import CheckFailedIcon from '@/shared/assets/icons/CheckFailed.svg';

import { VStack } from '@/shared/ui/Stack';
import { PTag } from '@/shared/ui/Paragraph/P';
import { Links } from '@/shared/ui/Links/Links';
import { RoutesPaths } from '@/shared/config/routeConfig/routeConfig';
import cls from './ConfirmUser.module.scss';

export interface ConfirmUserProps {
	className?: string;
}
export const ConfirmUser = memo((props: ConfirmUserProps) => {
	const { className } = props;
	const error = false;

	const content = useCallback(() => {
		if (error) {
			return (
				<>
					<CheckFailedIcon />
					<VStack align="center" justify="center" gap={0.75}>
						<Htag tage="h2" className={cls.header}>
							Not confirmed
						</Htag>
						<PTag className={cls.mistake} tage="14Reg">
							Description of the reason for this
						</PTag>
					</VStack>
					<ButtonUi
						layOut="TextOnly"
						theme="primary"
						size="L"
						className={cls.btn}
					>
						<Links to={RoutesPaths.signUp}>Return to Sign Up</Links>
					</ButtonUi>
				</>
			);
		}
		return (
			<>
				<CheckSuccessIcon />
				<Htag tage="h2" className={cls.header}>
					Your registration has been confirmed!
				</Htag>
				<ButtonUi
					layOut="TextOnly"
					theme="primary"
					size="L"
					className={cls.btn}
				>
					<Links to={RoutesPaths.account_type}>Continue </Links>
				</ButtonUi>
			</>
		);
	}, [error]);

	return (
		<Layout>
			<VStack
				align="center"
				justify="center"
				gap={1.75}
				className={classNames(cls.contetn, {}, [className])}
			>
				<LogoIcon />
				{content()}
			</VStack>
		</Layout>
	);
});
