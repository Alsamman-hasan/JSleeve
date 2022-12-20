import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SportsSearching.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { PTag } from '@/shared/ui/Paragraph/P';
import { InputUi } from '@/shared/ui/Input';
import { DividerUi } from '@/shared/ui/Divider/DividerUi';
import { SelectUi } from '@/shared/ui/SelectInput/SelectInput';
import {
	getSearchAthleteCities,
	getSearchAthleteFieldGoalAccuracyMax,
	getSearchAthleteFieldGoalAccuracyMin,
	getSearchAthleteFieldGoalPercentMax,
	getSearchAthleteFieldGoalPercentMin,
	getSearchAthleteJumpShotRatingMin,
	getSearchAthleteCity,
	getSearchAthleteState,
	getSearchAthleteJumpShotRatingMax,
} from '../../model/selectors/getSearchData';
import { usStates } from '@/shared/const/StateUSA';
import {
	AutocompleteUi,
	AutocompleteUiItem,
} from '@/shared/ui/Autocomplete/Autocomplete';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { searchAthleteActions } from '../../model/slice/searchSlice';
import { USAState } from '../../model/types/searchTypes';

export interface SportsSearchingProps {
	className?: string;
}

type Params =
	| 'fieldGoalPercentMin'
	| 'fieldGoalPercentMax'
	| 'fieldGoalAccuracyMin'
	| 'fieldGoalAccuracyMax'
	| 'jumpShotRatingMin'
	| 'jumpShotRatingMax';

export const SportsSearching = memo((props: SportsSearchingProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const fGPMin = useSelector(getSearchAthleteFieldGoalPercentMin);
	const fGPMax = useSelector(getSearchAthleteFieldGoalPercentMax);
	const fGAMin = useSelector(getSearchAthleteFieldGoalAccuracyMin);
	const fGAMax = useSelector(getSearchAthleteFieldGoalAccuracyMax);
	const jSRMin = useSelector(getSearchAthleteJumpShotRatingMin);
	const jSRMax = useSelector(getSearchAthleteJumpShotRatingMax);
	const listCities = useSelector(getSearchAthleteCities);
	const cityValue = useSelector(getSearchAthleteCity);
	const stateValue = useSelector(getSearchAthleteState);

	const citiesItems = useMemo(() => {
		if (listCities.length) {
			const cities = listCities.map((c, index) => ({ title: c, id: index }));
			return cities;
		}
		return [];
	}, [listCities]);

	const statesItems = useMemo(() => {
		return usStates;
	}, []);

	const onHandelChange = useCallback(
		(value: string, params: Params) => {
			switch (params) {
				case 'fieldGoalPercentMin':
					dispatch(
						searchAthleteActions.setSearchFieldGoalPercentMin(Number(value))
					);
					break;
				case 'fieldGoalPercentMax':
					dispatch(
						searchAthleteActions.setSearchFieldGoalPercentMax(Number(value))
					);
					break;
				case 'fieldGoalAccuracyMin':
					dispatch(
						searchAthleteActions.setSearchFieldGoalAccuracyMin(Number(value))
					);
					break;
				case 'fieldGoalAccuracyMax':
					dispatch(
						searchAthleteActions.setSearchFieldGoalAccuracyMax(Number(value))
					);
					break;
				case 'jumpShotRatingMin':
					dispatch(
						searchAthleteActions.setSearchJumpShotRatingMin(Number(value))
					);
					break;
				case 'jumpShotRatingMax':
					dispatch(
						searchAthleteActions.setSearchJumpShotRatingMax(Number(value))
					);
					break;
				default:
			}
		},
		[dispatch]
	);
	const onSelectState = useCallback(
		(value: AutocompleteUiItem | null) => {
			dispatch(searchAthleteActions.setSearcState(value as USAState));
		},
		[dispatch]
	);
	const onSelectCity = useCallback(
		(value: string) => {
			dispatch(searchAthleteActions.setSearchCity(value));
		},
		[dispatch]
	);
	return (
		<VStack
			gap={1.5}
			justify="start"
			className={classNames(cls.SportsSearching, {}, [className])}
		>
			<PTag tage="14SemiBold">Sports characteristics</PTag>
			<VStack gap={2}>
				<HStack gap={1}>
					<InputUi
						onChange={(value) => onHandelChange(value, 'fieldGoalPercentMin')}
						className={cls.inputM}
						label="Field Goal % min"
						type="number"
						value={fGPMin}
					/>
					<DividerUi className={cls.divider} orientation="horizontal" />
					<InputUi
						onChange={(value) => onHandelChange(value, 'fieldGoalPercentMax')}
						className={cls.inputM}
						label="Field Goal % max"
						type="number"
						value={fGPMax}
					/>
				</HStack>
				<HStack gap={1}>
					<InputUi
						onChange={(value) => onHandelChange(value, 'fieldGoalAccuracyMin')}
						className={cls.inputM}
						label="Field Goal Accuracy % min"
						type="number"
						value={fGAMin}
					/>
					<DividerUi className={cls.divider} orientation="horizontal" />
					<InputUi
						onChange={(value) => onHandelChange(value, 'fieldGoalAccuracyMax')}
						className={cls.inputM}
						label="Field Goal Accuracy % max"
						type="number"
						value={fGAMax}
					/>
				</HStack>
				<HStack gap={1}>
					<InputUi
						onChange={(value) => onHandelChange(value, 'jumpShotRatingMin')}
						className={cls.inputM}
						label="Jump Shot Rating % min"
						type="number"
						value={jSRMin}
					/>
					<DividerUi className={cls.divider} orientation="horizontal" />
					<InputUi
						onChange={(value) => onHandelChange(value, 'jumpShotRatingMax')}
						className={cls.inputM}
						label="Jump Shot Rating % max"
						type="number"
						value={jSRMax}
					/>
				</HStack>
			</VStack>
			<DividerUi className={cls.n} orientation="horizontal" />
			<PTag tage="14SemiBold">Location</PTag>
			<AutocompleteUi
				className={cls.select}
				items={statesItems}
				label="State"
				value={stateValue}
				onChange={onSelectState}
			/>
			<SelectUi
				items={citiesItems}
				onSelect={onSelectCity}
				className={cls.select}
				label="City"
				value={cityValue}
			/>
		</VStack>
	);
});
