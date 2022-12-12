import { memo } from 'react';
import { Divider } from '@mui/material';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Searching.module.scss';
import { Layout } from '@/shared/ui/Layout/Layout';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Htag } from '@/shared/ui/Htage/Htage';
import { ButtonUi } from '@/shared/ui/Button/Button';
import { SearchingHead } from '../SearchHeader/SearchingHead';
import { PhysicalSearching } from '../PhysicalSearching/PhysicalSearching';
import { DividerUi } from '@/shared/ui/Divider/DividerUi';
import { SportsSearching } from '../SportsSearching/SportsSearching';

interface SearchingProps {
	className?: string;
}

export const Searching = memo((props: SearchingProps) => {
	const { className } = props;

	return (
		<Layout className={classNames(cls.Searching, {}, [className])}>
			<VStack max gap={2}>
				<SearchingHead />
				<HStack className={cls.wrapper} align="start" max gap={2}>
					<PhysicalSearching />
					<DividerUi className={cls.divid} orientation="vertical" />
					<SportsSearching />
				</HStack>
			</VStack>
		</Layout>
	);
});
