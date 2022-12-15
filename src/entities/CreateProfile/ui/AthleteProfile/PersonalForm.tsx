import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CreateProfile.module.scss';
import { CollapsUi } from '@/shared/ui/CollapsUi/CollapsUi';
import { DividerUi } from '@/shared/ui/Divider/DividerUi';
import { InputUi } from '@/shared/ui/Input';
import ArrowLineUp from '@/shared/assets/icons/ArrowLineUp.svg';
import ArrowLineDown from '@/shared/assets/icons/ArrowLineDown.svg';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { athleteProfileActions } from '../../model/slice/athleteProfileSlice/athleteProfileSlice';
import { HStack, VStack } from '@/shared/ui/Stack';
import {
	getAthleteArmColour,
	getAthleteGender,
	getAthleteDominantHand,
	getAthletePosition,
} from '../../model/selectors/getAthleteProfileData /geAthleteProfileData';
import { SelectUi } from '@/shared/ui/SelectInput/SelectInput';

export interface WorksFormProps {
	className?: string;
}

const genderItems = [
	{ title: 'Male', id: 1 },
	{ title: 'Female', id: 2 },
	{ title: 'Nothing', id: 3 },
];
const handItems = [
	{ title: 'Right', id: 1 },
	{ title: 'Left', id: 2 },
];

export const PersonalForm = memo((props: WorksFormProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const [open, setOpen] = useState(false);
	const armColor = useSelector(getAthleteArmColour);
	const gender = useSelector(getAthleteGender);
	const hand = useSelector(getAthleteDominantHand);
	const position = useSelector(getAthletePosition);
	const handleClick = () => {
		setOpen(!open);
	};
	const onChangeArmColour = useCallback(
		(value: string) => {
			dispatch(athleteProfileActions.setArmColour(value));
		},
		[dispatch]
	);
	const onChangePosition = useCallback(
		(value: string) => {
			dispatch(athleteProfileActions.setPosition(value));
		},
		[dispatch]
	);
	const onSelectGender = useCallback(
		(value: string) => {
			dispatch(athleteProfileActions.setGender(value));
		},
		[dispatch]
	);

	const onSelectHand = useCallback(
		(value: string) => {
			dispatch(athleteProfileActions.setDominantHand(value));
		},
		[dispatch]
	);
	return (
		<>
			<DividerUi
				orientation="horizontal"
				text="Your Personality"
				className={classNames(cls.divider, {}, [className])}
				onClick={handleClick}
			>
				{open ? <ArrowLineUp /> : <ArrowLineDown />}
			</DividerUi>
			<CollapsUi open={open}>
				<VStack max align="center" gap={0.75}>
					<HStack max align="center" gap={1}>
						<InputUi
							onChange={onChangeArmColour}
							value={armColor}
							className={cls.inputs}
							type="text"
							label="Arm Color"
						/>
						<SelectUi
							label="Gender"
							items={genderItems}
							onSelect={onSelectGender}
							value={gender}
						/>
					</HStack>
					<HStack max align="center" gap={1}>
						<SelectUi
							label="Dominant Hand"
							items={handItems}
							onSelect={onSelectHand}
							value={hand}
						/>
						<InputUi
							onChange={onChangePosition}
							value={position}
							className={cls.inputs}
							type="text"
							label="Position"
						/>
					</HStack>
				</VStack>
			</CollapsUi>
		</>
	);
});
