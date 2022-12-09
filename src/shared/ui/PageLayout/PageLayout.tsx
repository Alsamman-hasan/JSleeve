import { memo, ReactNode } from 'react';
import { Header } from '@/widgets/Header';
import { VStack } from '../Stack';
import { Wrapper } from '../Wrapper/Wrapper';
import cls from './PageLayout.module.scss';
import { Sidebar } from '@/widgets/Sidebar';
import { classNames } from '../../lib/classNames/classNames';

export interface PageLayoutProps {
	children: ReactNode;
	gap?: number;
	className?: string;
}
export const PageLayout = memo((props: PageLayoutProps) => {
	const { children, gap, className } = props;
	return (
		<Wrapper className={cls.contetn}>
			<Header className={cls.header} />
			<VStack gap={gap} className={classNames(cls.main, {}, [className])}>
				{children}
			</VStack>
			<Sidebar className={cls.sidebar} />
		</Wrapper>
	);
});
