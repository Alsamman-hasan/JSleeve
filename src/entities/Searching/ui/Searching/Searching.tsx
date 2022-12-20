import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Searching.module.scss';
import { Layout } from '@/shared/ui/Layout/Layout';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ButtonUi } from '@/shared/ui/Button/Button';
import { SearchingHead } from '../SearchHeader/SearchingHead';
import { PhysicalSearching } from '../PhysicalSearching/PhysicalSearching';
import { DividerUi } from '@/shared/ui/Divider/DividerUi';
import { SportsSearching } from '../SportsSearching/SportsSearching';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { searchAthleteActions } from '../../model/slice/searchSlice';
import {
	getSearchAthleteData,
	getSearchAthleteIsLaoding,
} from '../../model/selectors/getSearchData';
import { searchAthleteReq } from '../../model/services/searchAthleteReq';
import { Loader } from '@/shared/ui/Loader/Loader';

interface SearchingProps {
	className?: string;
}

export const Searching = memo((props: SearchingProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const data = useSelector(getSearchAthleteData);
	const isloading = useSelector(getSearchAthleteIsLaoding);

	const onClearSearch = useCallback(() => {
		dispatch(searchAthleteActions.setClearSearch());
	}, [dispatch]);

	const onSearchHandler = useCallback(async () => {
		const result = await dispatch(searchAthleteReq());
	}, [dispatch]);

	return (
		<Layout className={classNames(cls.Searching, {}, [className])}>
			<VStack max gap={2}>
				<SearchingHead onClear={onClearSearch} />
				<HStack className={cls.wrapper} align="start" max gap={2}>
					<PhysicalSearching />
					<DividerUi className={cls.divid} orientation="vertical" />
					<SportsSearching />
				</HStack>
				<HStack max align="center" justify="end">
					<ButtonUi
						disabled={!data || isloading}
						className={cls.btn}
						onClick={onSearchHandler}
						layOut="TextOnly"
						theme="primary"
					>
						{isloading ? <Loader className={cls.loader} /> : 'Search'}
					</ButtonUi>
				</HStack>
			</VStack>
		</Layout>
	);
});
