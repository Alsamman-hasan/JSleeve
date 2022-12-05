import { CSSProperties, memo, ReactNode } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './P.module.scss';

export type pTypes = '14Reg' | '14SemiBold' | '12SemiBold' | '12Reg';

export interface PProps {
	tage: pTypes;
	className?: string;
	children: ReactNode;
	style?: CSSProperties;
}

export const PTag = memo((props: PProps) => {
	const { className, children, tage = '14Reg', style } = props;
	switch (tage) {
		case '14Reg':
			return (
				<p style={style} className={classNames(cls.Reg14, {}, [className])}>
					{' '}
					{children}
				</p>
			);
		case '14SemiBold':
			return (
				<p
					style={style}
					className={classNames(cls.SemiBold14, {}, [className])}
				>
					{' '}
					{children}
				</p>
			);
		case '12SemiBold':
			return (
				<p
					style={style}
					className={classNames(cls.SemiBold12, {}, [className])}
				>
					{' '}
					{children}
				</p>
			);
		case '12Reg':
			return (
				<p style={style} className={classNames(cls.Reg12, {}, [className])}>
					{' '}
					{children}
				</p>
			);
		default:
			return <></>;
	}
});
