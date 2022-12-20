import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SearchingHead.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { Htag } from '@/shared/ui/Htage/Htage';
import { ButtonUi } from '@/shared/ui/Button/Button';

interface SearchingHeadProps {
	className?: string;
	onClear?: () => void;
}

export const SearchingHead = memo((props: SearchingHeadProps) => {
	const { className, onClear } = props;

	return (
		<HStack
			max
			justify="between"
			className={classNames(cls.SearchingHead, {}, [className])}
		>
			<Htag tage="h3">Search</Htag>
			<ButtonUi onClick={onClear} layOut="TextOnly" theme="secondary">
				Clean all
			</ButtonUi>
		</HStack>
	);
});
