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
	getAthleteHeightFt,
	getAthleteHeightInFr,
	getAthleteHeightIn,
	getAthleteWeightLb,
} from '../../model/selectors/getAthleteProfileData /geAthleteProfileData';

export interface WorksFormProps {
	className?: string;
}

export const PhysicalForm = memo((props: WorksFormProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const [open, setOpen] = useState(false);
	const heightFt = useSelector(getAthleteHeightFt);
	const heightIn = useSelector(getAthleteHeightIn);
	const heightInFr = useSelector(getAthleteHeightInFr);
	const weightLb = useSelector(getAthleteWeightLb);
	const handleClick = () => {
		setOpen(!open);
	};
	const onChangeHeightFt = useCallback(
		(value: string) => {
			dispatch(athleteProfileActions.setHeightFt(Number(value)));
		},
		[dispatch]
	);
	const onChangeHeightIn = useCallback(
		(value: string) => {
			dispatch(athleteProfileActions.setHeightIn(Number(value)));
		},
		[dispatch]
	);

	const onChangeHeightInFr = useCallback(
		(value: string) => {
			dispatch(athleteProfileActions.setHeightInFr(value));
		},
		[dispatch]
	);

	const onChangeWeightLb = useCallback(
		(value: string) => {
			dispatch(athleteProfileActions.setWeightLb(Number(value)));
		},
		[dispatch]
	);

	return (
		<>
			<DividerUi
				orientation="horizontal"
				text="Physical Characteristics"
				className={classNames(cls.divider, {}, [className])}
				onClick={handleClick}
			>
				{open ? <ArrowLineUp /> : <ArrowLineDown />}
			</DividerUi>
			<CollapsUi open={open}>
				<VStack max align="center" gap={0.75}>
					<HStack max align="center" gap={1}>
						<InputUi
							onChange={onChangeHeightFt}
							value={heightFt}
							className={cls.inputs}
							type="text"
							label="Height-Ft"
						/>
						<InputUi
							onChange={onChangeHeightIn}
							value={heightIn}
							className={cls.inputs}
							type="text"
							label="Height-In"
						/>
					</HStack>
					<HStack max align="center" gap={1}>
						<InputUi
							onChange={onChangeHeightInFr}
							value={heightInFr}
							className={cls.inputs}
							type="text"
							label="Height-In-Fr"
						/>
						<InputUi
							onChange={onChangeWeightLb}
							value={weightLb}
							className={cls.inputs}
							type="text"
							label="Weight-Lb"
						/>
					</HStack>
				</VStack>
			</CollapsUi>
		</>
	);
});
