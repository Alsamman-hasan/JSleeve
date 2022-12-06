import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RecruiterAccount.module.scss';
import { CollapsUi } from '@/shared/ui/CollapsUi/CollapsUi';
import { DividerUi } from '@/shared/ui/Divider/DividerUi';
import { InputUi } from '@/shared/ui/Input';
import { VStack, HStack } from '@/shared/ui/Stack';
import ArrowLineUp from '@/shared/assets/icons/ArrowLineUp.svg';
import ArrowLineDown from '@/shared/assets/icons/ArrowLineDown.svg';
import { SelectUi } from '@/shared/ui/SelectInput/SelectInput';

export interface AddressFormProps {
	className?: string;
}
export const AddressForm = memo((props: AddressFormProps) => {
	const { className } = props;
	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setOpen(!open);
	};
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
					<SelectUi label="Country" />
					<HStack max gap={1}>
						<SelectUi label="State" />
						<SelectUi label="City" />
					</HStack>
					<div className={cls.inputWrapper}>
						<InputUi className={cls.firstInput} type="text" label="Address" />
						<InputUi className={cls.inputs} type="text" label="Zip" />
					</div>
				</VStack>
			</CollapsUi>
		</>
	);
});
