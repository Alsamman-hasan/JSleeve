import { Divider } from '@mui/material';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PTag } from '../Paragraph/P';
import './Divider.scss';

export interface DividerUiProps {
	className?: string;
	text?: string;
	orientation: 'horizontal' | 'vertical';
}
export const DividerUi = memo(
	({ text, orientation, className }: DividerUiProps) => {
		return (
			<div className={classNames('DividerUi', {}, [className])}>
				<Divider
					orientation={orientation}
					flexItem
					textAlign="center"
					variant="middle"
				>
					{text && <PTag tage="14Reg">{text}</PTag>}
				</Divider>
			</div>
		);
	}
);
