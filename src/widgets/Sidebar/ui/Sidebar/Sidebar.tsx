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
import { classNames } from '@/shared/lib/classNames/classNames';
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
	const menuRef = useRef(null) as MutableRefObject<HTMLDivElement | null>;
	const isHoverd = useHover(menuRef);
	// const isHoverd = true;
	const Sidebars = useMemo(() => SidebarElements, []);
	return (
		<menu
			ref={menuRef}
			className={classNames(cls.Sidebar, { [cls.hover]: isHoverd }, [
				className,
			])}
		>
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
