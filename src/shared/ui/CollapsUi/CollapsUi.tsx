import { memo, ReactNode } from 'react';
import { Collapse } from '@mui/material';
import { classNames } from '@/shared/lib/classNames/classNames';
import './CollapsUi.scss';

export interface CollapsUiProps {
	className?: string;
	children: ReactNode;
	open: boolean;
}
export const CollapsUi = memo((props: CollapsUiProps) => {
	const { className, children, open } = props;
	return (
		<div className={classNames('collaps', {}, [className])}>
			<Collapse in={open} timeout="auto" unmountOnExit>
				{children}
			</Collapse>
		</div>
	);
});
