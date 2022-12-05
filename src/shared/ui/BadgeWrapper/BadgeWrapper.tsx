import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, ReactNode, useMemo } from 'react';
import './BadgeWrapper.scss';
import { Badge } from '@mui/material';

export interface BadgeWrapperProps {
	className?: string;
	children: ReactNode;
	badgeContent?: number | string;
}

export const BadgeWrapper = memo((props: BadgeWrapperProps) => {
	const { className, children, badgeContent } = props;
	const variant = useMemo(() => {
		if (!badgeContent) {
			return 'dot';
		}
		return 'standard';
	}, [badgeContent]);

	return (
		<Badge
			variant={variant}
			badgeContent={badgeContent}
			className={classNames('Badge', {}, [className])}
		>
			{children}
		</Badge>
	);
});
