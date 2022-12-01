import { classNames } from 'shared/lib/classNames/classNames';
import { KeyboardEvent, memo, useCallback } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import './SearchInput.scss';
import Search from '../../assets/icons/Search.svg';
import SearchCross from '../../assets/icons/searchCross.svg';

export interface SearchInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
	disabled?: boolean;
	onKeyPressEnter?: (e: KeyboardEvent<HTMLDivElement>) => void;
}

const SearchIcon = memo(() => <Search />);
const SearchCrossIcon = memo(() => <SearchCross />);

export const SearchInput = memo((props: SearchInputProps) => {
	const { className, value, onChange, disabled, onKeyPressEnter } = props;

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	const onClearSearch = useCallback(() => {
		onChange?.('');
	}, [onChange]);

	const renderIcons = useCallback(() => {
		if (value) {
			return (
				<IconButton onClick={onClearSearch}>
					<SearchCrossIcon />
				</IconButton>
			);
		}
		return null;
	}, [onClearSearch, value]);

	return (
		<div className={classNames('SearchInput', {}, [className])}>
			<TextField
				name="search"
				placeholder="Search"
				className={classNames('', { hasValue: Boolean(value?.length) })}
				value={value}
				onChange={onChangeHandler}
				id="search-input-textfield"
				disabled={disabled}
				onKeyPress={onKeyPressEnter}
				type="search"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					),
					endAdornment: (
						<InputAdornment position="end">{renderIcons()}</InputAdornment>
					),
				}}
			/>
		</div>
	);
});
