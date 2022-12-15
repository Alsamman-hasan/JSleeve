import { memo, useEffect, useState } from 'react';
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
	getCheckUserIsAthlete,
	getCheckUserIsRecruiter,
	getCheckUserTypesError,
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
	const [tokenId, setTokenId] = useState<string | undefined>(undefined);
	const isLoading = useSelector(getCheckUserTypesIsLoading);
	const error = useSelector(getCheckUserTypesError);
	const recruiter = useSelector(getCheckUserTypesRecruiter);
	const athlete = useSelector(getCheckUserTypesaAthlete);
	const isAthlete = useSelector(getCheckUserIsAthlete);
	const isRecruiter = useSelector(getCheckUserIsRecruiter);
	const token = localStorage.getItem('tokenId') || tokenId;

	useEffect(() => {
		if (auth && auth.userData) {
			dispatch(AuthDataActions.setAuthData(auth.userData as User));
			setTokenId(auth.userData.id_token);
		}
	}, [auth, dispatch]);

	useEffect(() => {
		if (token) {
			setIsMounted(true);
			dispatch(fetchUserType());
		}
	}, [dispatch, token]);

	useEffect(() => {
		if (!isLoading && isMounted) {
			if (recruiter === null && athlete === null) {
				navigate(getRouteAccountType());
			}
			if (isAthlete) {
				if (athlete?.hasActiveSubscription === false) {
					navigate(getRouteRecruterSubscription());
				} else if (
					athlete?.hasActiveSubscription === true &&
					athlete?.hasProfile === false
				) {
					navigate(getRouteCreateProfile());
				} else {
					navigate(getRouteDashboard());
				}
			} else if (isRecruiter) {
				if (recruiter?.hasActiveSubscription === false) {
					navigate(getRouteRecruterSubscription());
				} else if (
					recruiter?.hasActiveSubscription === true &&
					recruiter?.hasProfile === false
				) {
					navigate(getRouteCreateProfile());
				} else {
					navigate(getRouteDashboard());
				}
			}
		}
	}, [
		athlete,
		isAthlete,
		isLoading,
		isMounted,
		isRecruiter,
		navigate,
		recruiter,
	]);

	return (
		<div className={classNames(cls.CheckUser, {}, [className])}>
			<Loader />
		</div>
	);
});
