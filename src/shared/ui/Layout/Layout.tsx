import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Layout.module.scss';

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: ReactNode;
	style?: CSSProperties;
}

export const Layout = memo((props: LayoutProps) => {
	const { className, children, style, ...otherProps } = props;
	return (
		<div
			{...otherProps}
			style={style}
			className={classNames(cls.Layout, {}, [className])}
		>
			{children}
		</div>
	);
});
