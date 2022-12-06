import { Divider } from '@mui/material';
import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PTag } from '../Paragraph/P';
import './Divider.scss';

export interface DividerUiProps {
	className?: string;
	text?: string;
	orientation?: 'horizontal' | 'vertical';
	children?: ReactNode;
	onClick?: () => void;
}
export const DividerUi = memo(
	({
		text,
		orientation = 'horizontal',
		className,
		children,
		onClick,
	}: DividerUiProps) => {
		return (
			<div
				onClick={onClick}
				className={classNames('DividerUi', {}, [className])}
			>
				<Divider
					orientation={orientation}
					flexItem
					textAlign="center"
					variant="middle"
				>
					{text && <PTag tage="14Reg">{text}</PTag>}
					{children}
				</Divider>
			</div>
		);
	}
);
