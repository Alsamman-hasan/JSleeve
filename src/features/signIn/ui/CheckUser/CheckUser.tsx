import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthContextProps, useAuth } from 'oidc-react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CheckUser.module.scss';
import { Loader } from '@/shared/ui/Loader/Loader';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { fetchUserType } from '../../model/services/CheckUserStatusReq/checkUserStatus';
import {
	DynamicModuleLoader,
	ReducersList,
} from '@/shared/lib/componnets/DynamicModuleLoader/DynamicModuleLoader';
import { checkUserTypeReducer } from '../../model/slices/checkUserSlice';
import {
	getCheckUserTypesIsLoading,
	getCheckUserTypesRecruiter,
	getCheckUserTypesaAthlete,
} from '../../model/selectors/getCheckUserType/getCheckUserType';
import {
	getRouteCreateProfile,
	getRouteAccountType,
	getRouteRecruterSubscription,
} from '@/shared/const/router';

export interface CheckUserProps {
	className?: string;
}

const Reducers: ReducersList = {
	checkUserType: checkUserTypeReducer,
};

export const CheckUser = memo((props: CheckUserProps) => {
	const { className } = props;
	const auth: AuthContextProps = useAuth();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const isLoading = useSelector(getCheckUserTypesIsLoading);
	const isRecruiter = useSelector(getCheckUserTypesRecruiter);
	const isAthlete = useSelector(getCheckUserTypesaAthlete);
	const token = localStorage.getItem('tokenId');
	useEffect(() => {
		if (token && auth) {
			dispatch(fetchUserType());
		}
	}, [auth, dispatch, token]);

	const contetn = () => {
		if (token) {
			if (isLoading) {
				return <Loader />;
			}
			if (!isRecruiter && !isAthlete) {
				navigate(getRouteAccountType());
			} else if (!isAthlete && !isRecruiter?.hasProfile) {
				navigate(getRouteCreateProfile());
			}
			if (isRecruiter || isAthlete) {
				navigate(getRouteRecruterSubscription());
			}
		}
		return <Loader />;
	};
	return (
		<div className={classNames(cls.CheckUser, {}, [className])}>
			{contetn()}
		</div>
	);
});
