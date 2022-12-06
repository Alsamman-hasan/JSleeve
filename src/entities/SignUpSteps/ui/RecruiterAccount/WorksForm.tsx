import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RecruiterAccount.module.scss';
import { CollapsUi } from '@/shared/ui/CollapsUi/CollapsUi';
import { DividerUi } from '@/shared/ui/Divider/DividerUi';
import { InputUi } from '@/shared/ui/Input';
import { VStack, HStack } from '@/shared/ui/Stack';
import ArrowLineUp from '@/shared/assets/icons/ArrowLineUp.svg';
import ArrowLineDown from '@/shared/assets/icons/ArrowLineDown.svg';

export interface WorksFormProps {
	className?: string;
}
export const WorksForm = memo((props: WorksFormProps) => {
	const { className } = props;
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};
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
						hasIcon
						className={cls.inputs}
						type="text"
						label="College / team"
					/>
					<InputUi className={cls.inputs} type="text" label="Role" />
				</div>
			</CollapsUi>
		</>
	);
});
