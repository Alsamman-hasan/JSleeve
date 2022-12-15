import { Dayjs } from 'dayjs';
import { memo } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import { classNames } from '../../lib/classNames/classNames';
import './DatePicker.scss';

export interface DatePickerProps {
	className?: string;
	label: string;
	value: Dayjs | null;
	onChange?: (value: Dayjs | null) => void;
}
export const DatePickerUi = memo((props: DatePickerProps) => {
	const { className, label, onChange, value } = props;
	const handleChange = (newValue: Dayjs | null) => {
		onChange?.(newValue);
	};
	return (
		<div className={classNames('DataPicker', {}, [className])}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DesktopDatePicker
					label={label}
					inputFormat="YYYY-MM-DD"
					value={value}
					onChange={handleChange}
					renderInput={(params) => <TextField {...params} error={false} />}
				/>
			</LocalizationProvider>
		</div>
	);
});
