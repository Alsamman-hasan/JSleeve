import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogoIcon } from '@/shared/assets/icons/LogoIcon';
import UserCircle from '@/shared/assets/icons/UserCircle.svg';
import BriefcaseMetal from '@/shared/assets/icons/BriefcaseMetal.svg';
import ArrowLineRight from '@/shared/assets/icons/ArrowLineRight2.svg';
import { RoutesPaths } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonUi } from '@/shared/ui/Button/Button';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Layout } from '@/shared/ui/Layout/Layout';
import { VStack } from '@/shared/ui/Stack';
import cls from './AccountType.module.scss';
import { CardUi } from '@/shared/ui/Card';

export interface AccountTypeProps {
	className?: string;
}
export const AccountType = memo((props: AccountTypeProps) => {
	const { className } = props;
	const navigate = useNavigate();
	const [selected, setSelected] = useState<string | number | null>(null);
	const onSelect = useCallback((value: string | number | null) => {
		setSelected(value);
	}, []);

	const onMoveStep = () => {
		navigate(RoutesPaths.uikit);
	};

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
					Choose Account Type
				</Htag>
				<CardUi
					value="1"
					onSelect={onSelect}
					title="Athlete Account"
					Icon={UserCircle}
					selected={selected}
					subTitle="I make jump shots"
				/>
				<CardUi
					value="2"
					onSelect={onSelect}
					title="Recruiter Account"
					Icon={BriefcaseMetal}
					selected={selected}
					subTitle="I’m looking for professional athletes"
				/>
				<ButtonUi
					disabled={!selected}
					onClick={onMoveStep}
					layOut="IconAfter"
					icon={<ArrowLineRight className={cls.btnIcon} />}
					theme="primary"
					size="L"
					className={cls.btn}
				>
					Continue
				</ButtonUi>
			</VStack>
		</Layout>
	);
});
