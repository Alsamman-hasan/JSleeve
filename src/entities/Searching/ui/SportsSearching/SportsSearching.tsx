import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SportsSearching.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { PTag } from '@/shared/ui/Paragraph/P';
import { InputUi } from '@/shared/ui/Input';
import { DividerUi } from '@/shared/ui/Divider/DividerUi';
import { SelectUi } from '@/shared/ui/SelectInput/SelectInput';

export interface SportsSearchingProps {
	className?: string;
}
export const SportsSearching = memo((props: SportsSearchingProps) => {
	const { className } = props;
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
						className={cls.inputM}
						label="Field Goal % min"
						type="number"
					/>
					<DividerUi className={cls.divider} orientation="horizontal" />
					<InputUi
						className={cls.inputM}
						label="Field Goal % max"
						type="number"
					/>
				</HStack>
				<HStack gap={1}>
					<InputUi
						className={cls.inputM}
						label="Field Goal Accuracy % min"
						type="number"
					/>
					<DividerUi className={cls.divider} orientation="horizontal" />
					<InputUi
						className={cls.inputM}
						label="Field Goal Accuracy % max"
						type="number"
					/>
				</HStack>
				<HStack gap={1}>
					<InputUi
						className={cls.inputM}
						label="Jump Shot Rating % min"
						type="number"
					/>
					<DividerUi className={cls.divider} orientation="horizontal" />
					<InputUi
						className={cls.inputM}
						label="Jump Shot Rating % max"
						type="number"
					/>
				</HStack>
			</VStack>
			<DividerUi className={cls.n} orientation="horizontal" />
			<PTag tage="14SemiBold">Location</PTag>
			<SelectUi className={cls.select} label="State" />
			<SelectUi className={cls.select} label="City" />
		</VStack>
	);
});
