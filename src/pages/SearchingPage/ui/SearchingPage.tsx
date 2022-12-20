import { memo } from 'react';
import { PageLayout } from '@/widgets/PageLayout/PageLayout';

import cls from './SearchingPage.module.scss';
import { searchAthleteReducer, Searching } from '@/entities/Searching';
import {
	DynamicModuleLoader,
	ReducersList,
} from '@/shared/lib/componnets/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
	searchAthlete: searchAthleteReducer,
};

export const SearchingPage = memo(() => {
	return (
		<PageLayout className={cls.SearchingPage}>
			<DynamicModuleLoader reducers={reducers}>
				<Searching />
			</DynamicModuleLoader>
		</PageLayout>
	);
});
export default SearchingPage;
