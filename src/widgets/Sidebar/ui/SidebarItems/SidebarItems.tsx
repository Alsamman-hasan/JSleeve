import { FC, memo, SVGProps } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from 'shared/ui/Stack';
import { PTag } from 'shared/ui/Paragraph/P';
import cls from './SidebarItems.module.scss';

export interface SidebarItemsProps {
	className?: string;
	name?: string;
	Icon: FC<SVGProps<SVGSVGElement>>;
}
export const SidebarItems = memo((props: SidebarItemsProps) => {
	const { className, name, Icon } = props;
	return (
		<HStack
			align="center"
			gap={12}
			className={classNames(cls.SidebarItems, { [cls.nonName]: !name }, [
				className,
			])}
		>
			<>
				<Icon className={cls.icon} />
				{name && <PTag tage="14Reg">{name}</PTag>}
			</>
		</HStack>
	);
});
