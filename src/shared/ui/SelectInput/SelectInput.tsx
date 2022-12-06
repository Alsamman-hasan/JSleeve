import { ReactNode } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
	FormHelperText,
	InputLabel,
	MenuItem,
	FormControl,
} from '@mui/material';
import { classNames } from '../../lib/classNames/classNames';
import './SelectInput.scss';
import ArrowLineDown from '../../assets/icons/ArrowLineDown.svg';

interface Items {
	title: string;
	id: number | string;
}
export interface SelectUiProps {
	className?: string;
	value?: string;
	onSelect?: (value: string) => void;
	label?: ReactNode;
	errorMessage?: string | undefined;
	error?: boolean;
	items?: Items[];
}

export const SelectUi = (props: SelectUiProps) => {
	const {
		className,
		error,
		errorMessage,
		label,
		onSelect,
		value = '',
		items,
	} = props;
	const handleChange = (event: SelectChangeEvent) => {
		onSelect?.(event.target.value as string);
	};

	return (
		<div className={classNames('select', {}, [className])}>
			<FormControl fullWidth>
				<InputLabel id="select-label">{label}</InputLabel>
				<Select
					variant="outlined"
					labelId="select-label"
					id="select"
					value={value}
					label={label}
					onChange={handleChange}
					IconComponent={ArrowLineDown}
				>
					{items &&
						items.map((item) => (
							<MenuItem key={item.id} value={item?.title}>
								{item?.title}
							</MenuItem>
						))}
				</Select>
				{error && <FormHelperText>{errorMessage}</FormHelperText>}
			</FormControl>
		</div>
	);
};
