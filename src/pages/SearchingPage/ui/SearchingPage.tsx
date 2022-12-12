import { memo } from 'react';
import { PageLayout } from '@/widgets/PageLayout/PageLayout';

import cls from './SearchingPage.module.scss';
import { Searching } from '@/entities/Searching';

export const SearchingPage = memo(() => {
	return (
		<PageLayout className={cls.SearchingPage}>
			<Searching />
		</PageLayout>
	);
});
export default SearchingPage;
