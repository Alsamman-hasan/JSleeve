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
import { recruiterProfileActions } from '../model/slice/recruiterProfileSlice/recruiterProfileSlice';
import {
	getRecruiterPlaceWork,
	getRecruiterRoleWork,
} from '../model/selectors/getRecruiterProfileData/getRecruiterProfileData';

export interface WorksFormProps {
	className?: string;
}
export const WorksForm = memo((props: WorksFormProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const [open, setOpen] = useState(false);
	const placeWork = useSelector(getRecruiterPlaceWork);
	const roleWork = useSelector(getRecruiterRoleWork);
	const handleClick = () => {
		setOpen(!open);
	};

	const onChangePlaceOfWork = useCallback(
		(value: string) => {
			dispatch(recruiterProfileActions.setPlaceOfWork(value));
		},
		[dispatch]
	);
	const onChangeRoleAtWork = useCallback(
		(value: string) => {
			dispatch(recruiterProfileActions.setRoleAtWork(value));
		},
		[dispatch]
	);
	return (
		<>
			<DividerUi
				orientation="horizontal"
				text="Your Work"
				className={classNames(cls.divider, {}, [className])}
				onClick={handleClick}
			>
				{open ? <ArrowLineUp /> : <ArrowLineDown />}
			</DividerUi>
			<CollapsUi open={open}>
				<div className={cls.inputWrapper}>
					<InputUi
						onChange={onChangePlaceOfWork}
						value={placeWork}
						className={cls.inputs}
						type="text"
						label="College / team"
					/>
					<InputUi
						onChange={onChangeRoleAtWork}
						className={cls.inputs}
						value={roleWork}
						type="text"
						label="Role"
					/>
				</div>
			</CollapsUi>
		</>
	);
});
