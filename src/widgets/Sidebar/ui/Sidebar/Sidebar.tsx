import {
	memo,
	MutableRefObject,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import LogoIcon from '@/shared/assets/icons/IconLogo.svg';
import SpartaIcon from '@/shared/assets/icons/SPARTA.svg';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { SidebarItems } from '../SidebarItems/SidebarItems';
import cls from './Sidebar.module.scss';
import { SidebarElements } from '../../model/SidebarElements';
import useHover from '@/shared/lib/hooks/UseHover/useHover';

export interface SidebarProps {
	className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
	const { className } = props;
	const [mounted, setMounted] = useState(false);
	const menuRef = useRef(null) as MutableRefObject<HTMLDivElement | null>;
	const isHoverd = useHover(menuRef);
	// const isHoverd = true;
	const Sidebars = useMemo(() => SidebarElements, []);

	useMemo(() => {
		if (isHoverd) setMounted(true);
	}, [isHoverd]);

	const mode: Mods = useMemo(
		() => ({
			[cls.hover]: isHoverd,
			[cls.nonHover]: !isHoverd && mounted,
		}),
		[isHoverd, mounted]
	);

	return (
		<menu ref={menuRef} className={classNames(cls.Sidebar, mode, [className])}>
			<HStack className={cls.HeaderIcon} align="center" justify="start">
				<LogoIcon />
				{isHoverd && <SpartaIcon />}
			</HStack>

			<VStack gap={0.25} align="center">
				{Sidebars.map((item) => (
					<SidebarItems
						key={item.link}
						isHoverd={isHoverd}
						Icon={item.Icon}
						name={item.name}
						link={item.link}
					/>
				))}
			</VStack>
		</menu>
	);
});
