import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PhysicalSearching.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { PTag } from '@/shared/ui/Paragraph/P';
import { InputUi } from '@/shared/ui/Input';
import { DividerUi } from '@/shared/ui/Divider/DividerUi';
import { SelectUi } from '@/shared/ui/SelectInput/SelectInput';
import {
	getSearchAthleteAgeMax,
	getSearchAthleteAgeMin,
	getSearchAthleteDominantHand,
	getSearchAthleteMaxHeightIn,
	getSearchAthleteMinHeightIn,
	getSearchAthleteMinWeightLb,
	getSearchAthleteMaxWeightLb,
	getSearchAthletePosition,
	getSearchAthleteData,
} from '../../model/selectors/getSearchData';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { searchAthleteActions } from '../../model/slice/searchSlice';
import { Position } from '../../model/types/searchTypes';

export interface PhysicalSearchingProps {
	className?: string;
}
const DominantHandItems = [
	{ id: 1, title: 'Right' },
	{ id: 2, title: 'Left' },
];

const PostionsItems = [
	{ id: 1, title: 'Center' },
	{ id: 2, title: 'PowerForward' },
	{ id: 3, title: 'SmallForward' },
	{ id: 4, title: 'PointGuard' },
	{ id: 5, title: 'ShootingGuard' },
];

type Params =
	| 'minAge'
	| 'maxAge'
	| 'maxWeightLb'
	| 'minWeightLb'
	| 'minHeightIn'
	| 'maxHeightIn'
	| 'position'
	| 'dominantHand';

export const PhysicalSearching = memo((props: PhysicalSearchingProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const minAge = useSelector(getSearchAthleteAgeMin);
	const maxAge = useSelector(getSearchAthleteAgeMax);
	const maxWeightLb = useSelector(getSearchAthleteMaxWeightLb);
	const minWeightLb = useSelector(getSearchAthleteMinWeightLb);
	const maxHeightIn = useSelector(getSearchAthleteMaxHeightIn);
	const minHeightIn = useSelector(getSearchAthleteMinHeightIn);
	const position = useSelector(getSearchAthletePosition);
	const dominantHand = useSelector(getSearchAthleteDominantHand);

	const onHandelChange = useCallback(
		(value: string, params: Params) => {
			switch (params) {
				case 'minAge':
					dispatch(searchAthleteActions.setSearchAgeMin(Number(value)));
					break;
				case 'maxAge':
					dispatch(searchAthleteActions.setSearchAgeMax(Number(value)));
					break;
				case 'maxHeightIn':
					dispatch(searchAthleteActions.setSearchMaxHeightIn(Number(value)));
					break;
				case 'minHeightIn':
					dispatch(searchAthleteActions.setSearchMinHeightIn(Number(value)));
					break;
				case 'maxWeightLb':
					dispatch(searchAthleteActions.setSearchMaxWeightLb(Number(value)));
					break;
				case 'minWeightLb':
					dispatch(searchAthleteActions.setSearchMinWeightLb(Number(value)));
					break;
				case 'position':
					dispatch(searchAthleteActions.setSearchPosition(value as Position));
					break;
				case 'dominantHand':
					dispatch(
						searchAthleteActions.setSearchDominantHand(
							value as 'Right' | 'Left'
						)
					);
					break;
				default:
			}
		},
		[dispatch]
	);

	return (
		<VStack
			gap={1.5}
			className={classNames(cls.PhysicalSearching, {}, [className])}
		>
			<PTag tage="14SemiBold">Physical characteristics</PTag>
			<VStack gap={2.8125}>
				<HStack gap={1}>
					<InputUi
						value={minAge}
						onChange={(value) => onHandelChange(value, 'minAge')}
						className={cls.inputM}
						label="Age min"
						type="number"
					/>
					<DividerUi className={cls.divider} orientation="horizontal" />
					<InputUi
						value={maxAge}
						onChange={(value) => onHandelChange(value, 'maxAge')}
						className={cls.inputM}
						label="Age max"
						type="number"
					/>
				</HStack>
				<HStack gap={1}>
					<InputUi
						value={minHeightIn}
						onChange={(value) => onHandelChange(value, 'minHeightIn')}
						className={cls.inputM}
						label="Height min"
						type="number"
					/>
					<DividerUi className={cls.divider} orientation="horizontal" />
					<InputUi
						value={maxHeightIn}
						onChange={(value) => onHandelChange(value, 'maxHeightIn')}
						className={cls.inputM}
						label="Height max"
						type="number"
					/>
				</HStack>
				<HStack gap={1}>
					<InputUi
						value={minWeightLb}
						onChange={(value) => onHandelChange(value, 'minWeightLb')}
						className={cls.inputM}
						label="Weight min"
						type="number"
					/>
					<DividerUi className={cls.divider} orientation="horizontal" />
					<InputUi
						value={maxWeightLb}
						onChange={(value) => onHandelChange(value, 'maxWeightLb')}
						className={cls.inputM}
						label="Weight max"
						type="number"
					/>
				</HStack>
				<SelectUi
					value={dominantHand}
					items={DominantHandItems}
					onSelect={(value) => onHandelChange(value, 'dominantHand')}
					className={cls.select}
					label="Dominant Hand"
				/>
				<SelectUi
					value={position}
					items={PostionsItems}
					onSelect={(value) => onHandelChange(value, 'position')}
					className={cls.select}
					label="Position"
				/>
			</VStack>
		</VStack>
	);
});
