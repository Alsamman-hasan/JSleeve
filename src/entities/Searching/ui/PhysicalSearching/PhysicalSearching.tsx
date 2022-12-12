import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PhysicalSearching.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { PTag } from '@/shared/ui/Paragraph/P';
import { InputUi } from '@/shared/ui/Input';
import { DividerUi } from '@/shared/ui/Divider/DividerUi';
import { SelectUi } from '@/shared/ui/SelectInput/SelectInput';

export interface PhysicalSearchingProps {
	className?: string;
}
export const PhysicalSearching = memo((props: PhysicalSearchingProps) => {
	const { className } = props;
	return (
		<VStack
			gap={1}
			className={classNames(cls.PhysicalSearching, {}, [className])}
		>
			<PTag tage="14SemiBold">Physical characteristics</PTag>
			<HStack gap={1}>
				<InputUi className={cls.inputM} label="Age min" type="number" />
				<DividerUi className={cls.divider} orientation="horizontal" />
				<InputUi className={cls.inputM} label="Age max" type="number" />
			</HStack>
			<HStack gap={1}>
				<InputUi className={cls.inputM} label="Height min" type="number" />
				<DividerUi className={cls.divider} orientation="horizontal" />
				<InputUi className={cls.inputM} label="Height max" type="number" />
			</HStack>
			<HStack gap={1}>
				<InputUi className={cls.inputM} label="Weight min" type="number" />
				<DividerUi className={cls.divider} orientation="horizontal" />
				<InputUi className={cls.inputM} label="Weight max" type="number" />
			</HStack>
			<SelectUi className={cls.select} label="Dominant Hand" />
			<DividerUi className={cls.n} orientation="horizontal" />
			<PTag tage="14SemiBold">Location</PTag>
			<SelectUi className={cls.select} label="State" />
			<SelectUi className={cls.select} label="City" />
		</VStack>
	);
});
