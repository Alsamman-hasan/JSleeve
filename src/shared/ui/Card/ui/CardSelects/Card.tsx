import { CSSProperties, FC, memo, SVGProps } from 'react';
import { classNames, Mods } from '../../../../lib/classNames/classNames';
import cls from './Card.module.scss';
import { Layout } from '../../../Layout/Layout';
import { HStack, VStack } from '../../../Stack';
import { PTag } from '../../../Paragraph/P';

type selected = string | number | null;

export interface CardProps {
	className?: string;
	Icon: FC<SVGProps<SVGSVGElement>>;
	title: string;
	subTitle?: string;
	value: string | number;
	selected?: selected;
	onSelect?: (newSelect: string | number | null) => void;
	style?: CSSProperties;
}

export const CardUi = memo((props: CardProps) => {
	const {
		className,
		Icon,
		title,
		subTitle,
		selected = null,
		onSelect,
		value,
		style,
	} = props;

	const onClick = (newSelect: selected) => () => {
		onSelect?.(newSelect);
	};
	const mods: Mods = {
		[cls.Selected]: selected === value,
	};
	return (
		<Layout
			onClick={onClick(value)}
			style={style}
			className={classNames(cls.Card, mods, [className])}
		>
			<HStack align="center" gap={1} max>
				<>
					<HStack>
						<Icon className={cls.icon} />
					</HStack>
					<VStack align="start" max>
						<PTag tage="14SemiBold" className={cls.title}>
							{title}
						</PTag>
						<PTag tage="14Reg" className={cls.subTitle}>
							{subTitle}
						</PTag>
					</VStack>
				</>
			</HStack>
		</Layout>
	);
});
