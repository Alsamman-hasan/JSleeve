import { memo, useMemo } from 'react';
import LogoIcon from '@/shared/assets/icons/logoSidebar.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { SidebarItems } from '../SidebarItems/SidebarItems';
import cls from './Sidebar.module.scss';
import { SidebarElements } from '../../model/SidebarElements';

export interface SidebarProps {
	className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
	const { className } = props;
	const Sidebars = useMemo(() => SidebarElements, []);
	return (
		<menu className={classNames(cls.Sidebar, {}, [className])}>
			<LogoIcon className={cls.svg} />
			<VStack gap={4}>
				{Sidebars.map((item) => (
					<div key={item.path}>
						<SidebarItems Icon={item.Icon} name={item.name} />
					</div>
				))}
			</VStack>
		</menu>
	);
});
