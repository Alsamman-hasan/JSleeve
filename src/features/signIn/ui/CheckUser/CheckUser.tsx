import { memo, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthContextProps, useAuth, User } from 'oidc-react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CheckUser.module.scss';
import { Loader } from '@/shared/ui/Loader/Loader';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { fetchUserType } from '../../model/services/CheckUserStatusReq/checkUserStatus';
import {
	getCheckUserTypesIsLoading,
	getCheckUserTypesRecruiter,
	getCheckUserTypesaAthlete,
} from '../../model/selectors/getCheckUserType/getCheckUserType';
import {
	getRouteCreateProfile,
	getRouteAccountType,
	getRouteRecruterSubscription,
	getRouteDashboard,
} from '@/shared/const/router';
import { AuthDataActions } from '@/entities/AuthData';

export interface CheckUserProps {
	className?: string;
}

export const CheckUser = memo((props: CheckUserProps) => {
	const { className } = props;
	const auth: AuthContextProps = useAuth();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [isMounted, setIsMounted] = useState(false);
	const isLoading = useSelector(getCheckUserTypesIsLoading);
	const isRecruiter = useSelector(getCheckUserTypesRecruiter);
	const isAthlete = useSelector(getCheckUserTypesaAthlete);
	const token = localStorage.getItem('tokenId');

	useEffect(() => {
		if (auth && auth.userData) {
			dispatch(AuthDataActions.setAuthData(auth.userData as User));
			setIsMounted(true);
		}
	}, [auth, dispatch]);

	useEffect(() => {
		if (token) {
			setIsMounted(true);
			dispatch(fetchUserType());
		}
	}, [dispatch, token]);

	const contetn = useCallback(() => {
		if (token && isMounted && auth && auth.userData) {
			if (isLoading) {
				return <Loader />;
			}
			if (isRecruiter === null && isAthlete === null) {
				navigate(getRouteAccountType());
			} else if (isRecruiter?.hasActiveSubscription) {
				navigate(getRouteDashboard());
			} else if (isRecruiter?.hasActiveSubscription === false) {
				navigate(getRouteRecruterSubscription());
			} else if (isRecruiter?.hasProfile === false) {
				navigate(getRouteCreateProfile());
			}
		}
		return <Loader />;
	}, [auth, isAthlete, isLoading, isMounted, isRecruiter, navigate, token]);
	return (
		<div className={classNames(cls.CheckUser, {}, [className])}>
			{contetn()}
		</div>
	);
});
