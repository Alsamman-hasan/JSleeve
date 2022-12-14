import { memo } from 'react';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import cls from './mainPage.module.scss';

const MainPage = memo((props: any) => {
	return (
		<Wrapper className={cls.main}>
			<div></div>
		</Wrapper>
	);
});

export default MainPage;
