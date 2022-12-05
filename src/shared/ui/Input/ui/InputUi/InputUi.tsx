import { classNames } from '@/shared/lib/classNames/classNames';
import {
	FC,
	forwardRef,
	HTMLInputTypeAttribute,
	InputHTMLAttributes,
	memo,
	ReactNode,
	RefAttributes,
	SVGProps,
	useCallback,
	useMemo,
	useState,
} from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import './InputUi.scss';
import ClearIcon from '../../../../assets/icons/clearCross.svg';
import EyeIcon from '../../../../assets/icons/Eye.svg';
import EyeCloseIcone from '../../../../assets/icons/EyeSlash.svg';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange' | 'readOnly'
>;

export interface InputUiProps extends HTMLInputProps {
	className?: string;
	value?: string | number;
	onChange?: (value: string) => void;
	label?: ReactNode;
	type?: HTMLInputTypeAttribute;
	Icon?: FC<SVGProps<SVGSVGElement>>;
	onIconClick?: () => void;
	errorMessage?: string | undefined;
	error?: boolean;
}

const Input = forwardRef((props: InputUiProps, ref: any) => {
	const {
		className,
		value,
		onChange,
		label,
		type = 'text',
		Icon,
		onIconClick,
		errorMessage,
		error,
	} = props;
	const [showPassword, setShowPassword] = useState(false);

	const clearValue = useCallback(() => {
		// onChange?.('');
	}, []);

	const onShowPassword = useCallback(() => {
		setShowPassword(!showPassword);
	}, [showPassword]);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	const Types = useMemo(() => {
		if (type === 'password' && !showPassword) {
			return 'password';
		}
		if (type !== 'password') {
			return type;
		}
		return 'text';
	}, [showPassword, type]);

	const iconBtn = useCallback(() => {
		if (Icon) {
			return (
				<IconButton key={type} onClick={onIconClick}>
					<Icon />
				</IconButton>
			);
		}
		return null;
	}, [Icon, onIconClick, type]);

	const Icons = useCallback(() => {
		switch (type) {
			case 'password':
				return (
					<IconButton onClick={onShowPassword} className="eyeIcons">
						{showPassword ? <EyeIcon /> : <EyeCloseIcone />}
					</IconButton>
				);
			case 'text':
				return (
					<IconButton key={type} onClick={clearValue}>
						<ClearIcon />
					</IconButton>
				);
			default:
				return iconBtn();
		}
	}, [clearValue, iconBtn, onShowPassword, showPassword, type]);

	return (
		<div className={classNames('InputUi', {}, [className])}>
			<TextField
				variant="outlined"
				value={value}
				onChange={onChangeHandler}
				id={`${label}input-with-icon-textfield"`}
				label={label}
				type={Types}
				error={error}
				helperText={
					error && <span className="InputUi__error">{errorMessage}</span>
				}
				InputProps={{
					endAdornment: (
						<InputAdornment position="start">
							<Icons />
						</InputAdornment>
					),
				}}
			/>
		</div>
	);
});

export const InputUi = memo(Input);
