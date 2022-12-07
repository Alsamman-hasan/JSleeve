import { Tooltip } from '@mui/material';
import { Htag } from '@/shared/ui/Htage/Htage';
import { VStack } from '@/shared/ui/Stack';
import './USAState.scss';

const USAState = (props: any) => {
	const { dimensions, fill, state, stateName, onClickState } = props;
	const title = () => {
		return (
			<VStack>
				<Htag tage="h3">*{stateName}</Htag>
				<Htag tage="h3">*{state}</Htag>
			</VStack>
		);
	};
	return (
		<Tooltip
			placement="bottom"
			disableInteractive
			id="tooltip-wrapper"
			title={title()}
		>
			<path
				d={dimensions}
				fill={fill}
				data-name={state}
				className={`${state} state`}
				onClick={onClickState}
			>
				<title>{stateName}</title>
			</path>
		</Tooltip>
	);
};
export default USAState;
