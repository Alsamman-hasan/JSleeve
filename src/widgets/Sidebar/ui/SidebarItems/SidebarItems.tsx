import { FC, memo, SVGProps, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { PTag } from '@/shared/ui/Paragraph/P';
import cls from './SidebarItems.module.scss';
import { Links } from '@/shared/ui/Links/Links';

export interface SidebarItemsProps {
	className?: string;
	name?: string;
	Icon: FC<SVGProps<SVGSVGElement>>;
	isHoverd?: boolean;
	link: string;
}
export const SidebarItems = memo((props: SidebarItemsProps) => {
	const { className, name, Icon, isHoverd, link } = props;
	const { pathname } = useLocation();

	const mods: Mods = useMemo(() => {
		return {
			[cls.isHoverd]: isHoverd,
		};
	}, [isHoverd]);

	const modsWrapper: Mods = useMemo(() => {
		return {
			[cls.selected]: pathname === link,
		};
	}, [link, pathname]);

	return (
		<Links to={link} className={cls.link}>
			<HStack
				gap={0.75}
				className={classNames(cls.SidebarItems, modsWrapper, [className])}
			>
				<>
					<div className={cls.icon}>
						<Icon />
					</div>
					{name && isHoverd && (
						<PTag className={classNames(cls.name, mods)} tage="14Reg">
							{name}
						</PTag>
					)}
				</>
			</HStack>
		</Links>
	);
});
