import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SearchingHead.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { Htag } from '@/shared/ui/Htage/Htage';
import { ButtonUi } from '@/shared/ui/Button/Button';

interface SearchingHeadProps {
	className?: string;
}

export const SearchingHead = memo((props: SearchingHeadProps) => {
	const { className } = props;

	return (
		<HStack
			max
			justify="between"
			className={classNames(cls.SearchingHead, {}, [className])}
		>
			<Htag tage="h3">Searching</Htag>
			<ButtonUi layOut="TextOnly" theme="secondary">
				Clean all
			</ButtonUi>
		</HStack>
	);
});
