import { Divider } from '@mui/material';
import { memo } from 'react';
import { PTag } from '../Paragraph/P';
import './Divider.scss';

export interface DividerUiProps {
	text?: string;
	orientation?: 'horizontal' | 'vertical';
}
export const DividerUi = memo(({ text, orientation }: DividerUiProps) => {
	return (
		<div className="DividerUi">
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
});
