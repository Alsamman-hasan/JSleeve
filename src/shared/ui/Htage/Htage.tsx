import { CSSProperties, memo, ReactNode } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Htage.module.scss';

export type hTypes = 'h1' | 'h2' | 'h3';

export interface HtageProps {
	className?: string;
	tage: hTypes;
	children: ReactNode;
	style?: CSSProperties;
}

export const Htag = memo((props: HtageProps): JSX.Element => {
	const { children, tage = 'h1', className, style, ...othreProps } = props;
	switch (tage) {
		case 'h1':
			return (
				<span
					style={style}
					{...othreProps}
					className={classNames(cls.h1, {}, [className])}
				>
					{children}
				</span>
			);
		case 'h2':
			return (
				<span
					style={style}
					{...othreProps}
					className={classNames(cls.h2, {}, [className])}
				>
					{children}
				</span>
			);
		case 'h3':
			return (
				<span
					style={style}
					{...othreProps}
					className={classNames(cls.h3, {}, [className])}
				>
					{children}
				</span>
			);
		default:
			return <></>;
	}
});
