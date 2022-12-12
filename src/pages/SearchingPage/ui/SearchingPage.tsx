import { memo } from 'react';
import { PageLayout } from '@/widgets/PageLayout/PageLayout';

import cls from './SearchingPage.module.scss';

export const SearchingPage = memo(() => {
	return <PageLayout className={cls.SearchingPage}>test</PageLayout>;
});
export default SearchingPage;
