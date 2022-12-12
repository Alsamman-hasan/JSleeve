import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const isLoading = useSelector(getCheckUserTypesIsLoading);
	const isRecruiter = useSelector(getCheckUserTypesRecruiter);
	const isAthlete = useSelector(getCheckUserTypesaAthlete);
	const token = localStorage.getItem('tokenId');
	useEffect(() => {
		if (token) {
			dispatch(fetchUserType());
		}
	}, [dispatch, token]);

	const contetn = () => {
		if (isLoading) {
			return <Loader />;
		}
		if (!isRecruiter && !isAthlete) {
			navigate(getRouteAccountType());
		}
		if (isRecruiter || isAthlete) {
			navigate(getRouteRecruterSubscription());
		}
		return null;
	};
	return (
		<DynamicModuleLoader reducers={Reducers} removeAfterUnmount={false}>
			<div className={classNames(cls.CheckUser, {}, [className])}>
				{contetn()}
			</div>
		</DynamicModuleLoader>
	);
});
