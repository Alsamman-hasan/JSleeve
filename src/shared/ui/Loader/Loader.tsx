import { memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import './loader.scss';

export interface LoaderProps {
	className?: string;
}
export const Loader = memo(({ className }: LoaderProps) => (
	<svg className="spinner" viewBox="0 0 50 50">
		<circle
			className="path"
			cx="25"
			cy="25"
			r="20"
			fill="none"
			strokeWidth="5"
		></circle>
	</svg>
));
