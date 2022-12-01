import './Tooltips.scss';
import { Tooltip } from '@mui/material';

export interface TooltipProps {
	titleText?: string;
	placement: 'top' | 'bottom' | 'right' | 'left';
	children: JSX.Element;
	textWidth?: string;
	titleBlock?: JSX.Element;
	open?: boolean;
	disableHoverListener?: boolean;
}

const TooltipWrapper = (props: TooltipProps) => {
	const {
		children,
		textWidth,
		titleText,
		placement,
		titleBlock,
		open,
		disableHoverListener,
	} = props;

	return (
		<Tooltip
			arrow
			open={open}
			disableHoverListener={disableHoverListener}
			title={
				<div className="tooltip-wrapper__title">
					{titleText && (
						<div
							className="tooltip-wrapper__title__text"
							style={{ width: textWidth || 'auto' }}
						>
							{titleText}
						</div>
					)}
					{titleBlock && titleBlock}
				</div>
			}
			placement={placement}
			disableInteractive
			id="tooltip-wrapper"
		>
			<span>{children}</span>
		</Tooltip>
	);
};

export default TooltipWrapper;
