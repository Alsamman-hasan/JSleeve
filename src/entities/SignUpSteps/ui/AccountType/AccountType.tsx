import { memo, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogoIcon } from '@/shared/assets/icons/LogoIcon';
import UserCircle from '@/shared/assets/icons/UserCircle.svg';
import BriefcaseMetal from '@/shared/assets/icons/BriefcaseMetal.svg';
import ArrowLineRight from '@/shared/assets/icons/ArrowLineRight2.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonUi } from '@/shared/ui/Button/Button';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Layout } from '@/shared/ui/Layout/Layout';
import { VStack } from '@/shared/ui/Stack';
import cls from './AccountType.module.scss';
import { CardUi } from '@/shared/ui/Card';
import { getRouteRecruterSubscription } from '@/shared/const/router';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { userTypeActions } from '../../model/slice/userTypeSlice';
import { userTypes } from '../../model/types/userTypes';

export interface AccountTypeProps {
	className?: string;
}
export const AccountType = memo((props: AccountTypeProps) => {
	const { className } = props;
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const selectedDefault = localStorage.getItem('user_type');
	const [selected, setSelected] = useState<userTypes>(
		selectedDefault as userTypes
	);
	const onSelect = useCallback((value: string | null) => {
		setSelected(value as userTypes);
	}, []);

	const type = localStorage.getItem('user_type') as userTypes;
	useEffect(() => {
		dispatch(userTypeActions.setUserType(type));
	}, [dispatch, type]);

	const onMoveStep = () => {
		if (selected) {
			dispatch(userTypeActions.setUserType(selected));
			localStorage.setItem('user_type', selected);
			navigate(getRouteRecruterSubscription());
		}
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
					value="athlete"
					onSelect={onSelect}
					title="Athlete Account"
					Icon={UserCircle}
					selected={selected}
					subTitle="I make jump shots"
				/>
				<CardUi
					value="recruiter"
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
