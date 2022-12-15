import { memo, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CreateProfile.module.scss';
import { CollapsUi } from '@/shared/ui/CollapsUi/CollapsUi';
import { DividerUi } from '@/shared/ui/Divider/DividerUi';
import { VStack, HStack } from '@/shared/ui/Stack';
import ArrowLineUp from '@/shared/assets/icons/ArrowLineUp.svg';
import ArrowLineDown from '@/shared/assets/icons/ArrowLineDown.svg';
import { SelectUi } from '@/shared/ui/SelectInput/SelectInput';
import { country } from '../../model/selectors/country/getCountry';
import { cities } from '../../model/selectors/getCity/getCity';
import { states } from '../../model/selectors/getState/getState';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { athleteProfileActions } from '../../model/slice/athleteProfileSlice/athleteProfileSlice';
import {
	getAthleteCity,
	getAthleteCountry,
	getAthleteState,
} from '../../model/selectors/getAthleteProfileData /geAthleteProfileData';

export interface AddressFormProps {
	className?: string;
}
export const AddressForm = memo((props: AddressFormProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const [open, setOpen] = useState(false);
	const countryValue = useSelector(getAthleteCountry);
	const cityValue = useSelector(getAthleteCity);
	const stateValue = useSelector(getAthleteState);

	const countryItems = useMemo(() => {
		return country;
	}, []);

	const citiesItems = useMemo(() => {
		return cities;
	}, []);
	const statesItems = useMemo(() => {
		return states;
	}, []);

	const handleClick = () => {
		setOpen(!open);
	};

	const onSelectCountry = useCallback(
		(value: string) => {
			dispatch(athleteProfileActions.setCountry(value));
		},
		[dispatch]
	);

	const onSelectCities = useCallback(
		(value: string) => {
			dispatch(athleteProfileActions.setCity(value));
		},
		[dispatch]
	);

	const onSelectState = useCallback(
		(value: string) => {
			dispatch(athleteProfileActions.setState(value));
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
					<SelectUi
						onSelect={onSelectCountry}
						label="Country"
						items={countryItems}
						value={countryValue}
					/>
					<HStack max gap={1}>
						<SelectUi
							label="State"
							items={statesItems}
							onSelect={onSelectState}
							value={stateValue}
						/>
						<SelectUi
							label="City"
							items={citiesItems}
							onSelect={onSelectCities}
							value={cityValue}
						/>
					</HStack>
				</VStack>
			</CollapsUi>
		</>
	);
});
