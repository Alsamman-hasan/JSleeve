import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PaymentSuccess.module.scss';
import CheckSuccessIcon from '@/shared/assets/icons/CheckSuccess.svg';
import { LogoIcon } from '@/shared/assets/icons/LogoIcon';
import { getRouteCreateProfile } from '@/shared/const/router';
import { ButtonUi } from '@/shared/ui/Button/Button';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Layout } from '@/shared/ui/Layout/Layout';
import { Links } from '@/shared/ui/Links/Links';
import { VStack } from '@/shared/ui/Stack';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import {
	fetchUserType,
	getCheckUserTypesaAthlete,
	getCheckUserTypesRecruiter,
} from '@/features/signIn';
import { Loader } from '@/shared/ui/Loader/Loader';

export interface PaymentSuccessProps {
	className?: string;
}
export const PaymentSuccess = memo((props: PaymentSuccessProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const isRecruiter = useSelector(getCheckUserTypesRecruiter);
	const isAthlete = useSelector(getCheckUserTypesaAthlete);

	const checkUser = setInterval(() => {
		dispatch(fetchUserType());
	}, 5000);

	useEffect(() => {
		if (
			isRecruiter?.hasActiveSubscription ||
			isAthlete?.hasActiveSubscription
		) {
			clearInterval(checkUser);
		}
		return () => {
			clearInterval(checkUser);
		};
	}, [
		checkUser,
		dispatch,
		isAthlete?.hasActiveSubscription,
		isRecruiter?.hasActiveSubscription,
	]);

	const contetn = () => {
		if (
			!isRecruiter?.hasActiveSubscription ||
			!isAthlete?.hasActiveSubscription
		) {
			return (
				<VStack align="center" justify="center" style={{ height: '100%' }}>
					<Loader />
				</VStack>
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
					<Links to={getRouteCreateProfile()}>Create My Account</Links>
				</ButtonUi>
			</>
		);
	};

	return (
		<Layout>
			<VStack
				align="center"
				gap={1.75}
				className={classNames(cls.contetn, {}, [className])}
			>
				<LogoIcon />
				{contetn()}
			</VStack>
		</Layout>
	);
});
