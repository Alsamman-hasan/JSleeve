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
import cls from './RecruterSubsStatus.module.scss';

export interface RecruterSubsStatusProps {
	className?: string;
}
export const RecruterSubsStatus = memo((props: RecruterSubsStatusProps) => {
	const { className } = props;
	const error = false;

	const content = useCallback(() => {
		if (error) {
			return (
				<>
					<CheckFailedIcon />
					<VStack align="center" justify="center" gap={12}>
						<Htag tage="h2" className={cls.header}>
							Something go wrong
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
						<Links to={RoutesPaths.Recruter_subscription}>
							Return to add subscription
						</Links>
					</ButtonUi>
				</>
			);
		}
		return (
			<>
				<CheckSuccessIcon />
				<Htag tage="h2" className={cls.header}>
					Your subscription have been added!
				</Htag>
				<ButtonUi
					layOut="TextOnly"
					theme="primary"
					size="L"
					className={cls.btn}
				>
					<Links to={RoutesPaths.uikit}>Go to Dashboard</Links>
				</ButtonUi>
			</>
		);
	}, [error]);

	return (
		<Layout>
			<VStack
				align="center"
				justify="center"
				gap={28}
				className={classNames(cls.contetn, {}, [className])}
			>
				<LogoIcon />
				{content()}
			</VStack>
		</Layout>
	);
});
