import { memo, useMemo, useState } from 'react';
import { MenuItem, Autocomplete } from '@mui/material';
import { InputUi } from '../Input';
import './Autocomplete.scss';
import ArrowLineUp from '../../assets/icons/ArrowLineUp.svg';
import ArrowLineDown from '../../assets/icons/ArrowLineDown.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface AutocompleteUiItem {
	label: string;
	code: string;
	phone?: string;
	suggested?: boolean;
}

interface AutocompleteUiProps {
	className?: string;
	label: string;
	value: string;
	onChange?: (value: AutocompleteUiItem | null) => void;
	items: AutocompleteUiItem[];
}

export const AutocompleteUi = memo((props: AutocompleteUiProps) => {
	const { label, value, className, onChange, items } = props;
	const [open, setOpen] = useState(false);
	const icon = useMemo(() => {
		if (open) {
			return ArrowLineUp;
		}
		return ArrowLineDown;
	}, [open]);

	const onChangeHandler = (
		event: React.SyntheticEvent,
		value: AutocompleteUiItem | null
	) => {
		onChange?.(value);
	};
	return (
		<div className={classNames('Autocomplete', {}, [className])}>
			<Autocomplete
				id="Autocomplete"
				options={items}
				onOpen={() => setOpen(true)}
				onClose={() => setOpen(false)}
				autoHighlight
				open={open}
				onChange={onChangeHandler}
				getOptionLabel={(option) => option.label}
				renderOption={(props, option) => (
					<MenuItem className="Autocomplete__menuItem" {...props}>
						{option.label} ({option.code})
					</MenuItem>
				)}
				renderInput={(params) => (
					<InputUi
						ref={params.InputProps.ref}
						label={label}
						type="email"
						value={value}
						Icon={icon}
						otherPropsinput={{
							...params.inputProps,
							autoComplete: 'Autocomplete',
						}}
					/>
				)}
			/>
		</div>
	);
});
