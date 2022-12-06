import { memo, ReactNode } from 'react';
import { Header } from '@/widgets/Header';
import { VStack } from '../Stack';
import { Wrapper } from '../Wrapper/Wrapper';
import cls from './PageLayout.module.scss';
import { Sidebar } from '@/widgets/Sidebar';

export interface PageLayoutProps {
	children: ReactNode;
	gap?: number;
}
export const PageLayout = memo((props: PageLayoutProps) => {
	const { children, gap } = props;
	return (
		<Wrapper className={cls.contetn}>
			<Header className={cls.header} />
			<VStack gap={gap} className={cls.main}>
				{children}
			</VStack>
			<Sidebar className={cls.sidebar} />
		</Wrapper>
	);
});
