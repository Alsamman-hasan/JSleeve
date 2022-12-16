import { memo, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CreateProfile.module.scss';
import { CollapsUi } from '@/shared/ui/CollapsUi/CollapsUi';
import { DividerUi } from '@/shared/ui/Divider/DividerUi';
import { InputUi } from '@/shared/ui/Input';
import { VStack, HStack } from '@/shared/ui/Stack';
import ArrowLineUp from '@/shared/assets/icons/ArrowLineUp.svg';
import ArrowLineDown from '@/shared/assets/icons/ArrowLineDown.svg';
import { SelectUi } from '@/shared/ui/SelectInput/SelectInput';
import { country } from '../../model/selectors/country/getCountry';
import { cities } from '../../model/selectors/getCity/getCity';
import { states } from '../../model/selectors/getState/getState';
import { recruiterProfileActions } from '../../model/slice/recruiterProfileSlice/recruiterProfileSlice';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import {
	getRecruiterAddres,
	getRecruiterZip,
	getRecruiterCountry,
	getRecruiterCity,
	getRecruiterState,
} from '../../model/selectors/getRecruiterProfileData/getRecruiterProfileData';
import {
	AutocompleteUi,
	AutocompleteUiItem,
} from '@/shared/ui/Autocomplete/Autocomplete';
import { countries } from '../../model/selectors/country/getCountries';
import { usStates } from '../../model/selectors/getState/getstates';
import { USAState } from '../../model/types/recruiterProfile';

export interface AddressFormProps {
	className?: string;
}
export const AddressForm = memo((props: AddressFormProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const [open, setOpen] = useState(false);
	const address = useSelector(getRecruiterAddres);
	const zip = useSelector(getRecruiterZip);
	const countryValue = useSelector(getRecruiterCountry);
	const cityValue = useSelector(getRecruiterCity);
	const stateValue = useSelector(getRecruiterState);

	const countryItems = useMemo(() => {
		return country;
	}, []);

	const citiesItems = useMemo(() => {
		return cities;
	}, []);
	const statesItems = useMemo(() => {
		return usStates;
	}, []);

	const handleClick = () => {
		setOpen(!open);
	};

	const onSelectCountry = useCallback(
		(value: string) => {
			dispatch(recruiterProfileActions.setCountry(value));
		},
		[dispatch]
	);

	const onSelectCities = useCallback(
		(value: string) => {
			dispatch(recruiterProfileActions.setCity(value));
		},
		[dispatch]
	);

	const onSelectState = useCallback(
		(value: AutocompleteUiItem | null) => {
			dispatch(recruiterProfileActions.setState(value as USAState));
		},
		[dispatch]
	);
	const onChangeAddress = useCallback(
		(value: string) => {
			dispatch(recruiterProfileActions.setAddres(value));
		},
		[dispatch]
	);
	const onChangeZip = useCallback(
		(value: string) => {
			dispatch(recruiterProfileActions.setZipCode(value));
		},
		[dispatch]
	);
	return (
		<>
			<DividerUi
				orientation="horizontal"
				text="Your Address"
				className={classNames(cls.divider, {}, [className])}
				onClick={handleClick}
			>
				{open ? <ArrowLineUp /> : <ArrowLineDown />}
			</DividerUi>
			<CollapsUi open={open}>
				<VStack max gap={1}>
					{/* <AutocompleteUi
						items={countries}
						label="Country"
						value={countryValue}
					/> */}
					<SelectUi
						onSelect={onSelectCountry}
						label="Country"
						items={countryItems}
						value={countryValue}
					/>
					<HStack max gap={1}>
						{/* <SelectUi
							label="State"
							items={statesItems}
							onSelect={onSelectState}
							value={stateValue}
						/> */}
						<AutocompleteUi
							items={statesItems}
							label="State"
							value={stateValue}
							onChange={onSelectState}
						/>
						<SelectUi
							label="City"
							items={citiesItems}
							onSelect={onSelectCities}
							value={cityValue}
						/>
					</HStack>
					<div className={cls.inputWrapper}>
						<InputUi
							className={cls.firstInput}
							type="text"
							label="Address"
							onChange={onChangeAddress}
							value={address}
						/>
						<InputUi
							className={cls.inputs}
							type="text"
							label="Zip"
							onChange={onChangeZip}
							value={zip}
						/>
					</div>
				</VStack>
			</CollapsUi>
		</>
	);
});
