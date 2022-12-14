import { InputHTMLAttributes, memo, ReactNode } from 'react';
import { TextField } from '@mui/material';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { classNames } from '../../lib/classNames/classNames';
import './PhoneInput.scss';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange' | 'readOnly'
>;

export interface PhoneInputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
	label?: ReactNode;
	errorMessage?: string | undefined;
	error?: boolean;
}

export const PhoneInput = memo((props: PhoneInputProps) => {
	const { className, value, onChange, label, errorMessage, error } = props;

	const normalizePhoneNumber = (value: string) => {
		const phoneNumber = parsePhoneNumberFromString(value);
		if (!phoneNumber) {
			return value;
		}
		return phoneNumber.formatInternational();
	};

	const onChangeHandler = (value: string) => {
		onChange?.(value);
	};
	return (
		<div className={classNames('InputUi', {}, [className])}>
			<TextField
				variant="outlined"
				value={value}
				onChange={(event) => {
					event.target.value = normalizePhoneNumber(event.target.value);
					onChangeHandler(event.target.value);
				}}
				id={`${label}input-textfield"`}
				label={label}
				type="tel"
				inputProps={{
					maxLength: 25,
				}}
				error={error}
				helperText={
					error && <span className="InputUi__error">{errorMessage}</span>
				}
			/>
		</div>
	);
});
