import { FC, memo, SVGProps } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './CardInfo.module.scss';
import { Layout } from '../../../Layout/Layout';
import { HStack, VStack } from '../../../Stack';
import { PTag } from '../../../Paragraph/P';
import { Htag } from '@/shared/ui/Htage/Htage';
import DecreaseIcon from '../../../../assets/icons/decrease.svg';
import IncreaseIcon from '../../../../assets/icons/increase.svg';

export interface CardInfoProps {
	className?: string;
	Icon: FC<SVGProps<SVGSVGElement>>;
	title: string;
	subTitle?: string | number;
	indicator?: string | number;
	increase?: boolean;
	decrease?: boolean;
}
export const CardInfo = memo((props: CardInfoProps) => {
	const { className, Icon, indicator, title, subTitle, decrease, increase } =
		props;

	const modeIndecator: Mods = {
		[cls.increase]: increase,
		[cls.decrease]: decrease,
	};
	return (
		<Layout className={classNames(cls.CardInfo, {}, [className])}>
			<HStack align="start" justify="between">
				<VStack max gap={0.5}>
					<PTag tage="14SemiBold" className={cls.title}>
						{title}
					</PTag>
					<VStack gap={0}>
						<Htag tage="h3" className={cls.value}>
							{subTitle}
						</Htag>
						{indicator && (
							<HStack align="center" gap={0.375}>
								<PTag tage="14Reg" className={classNames('', modeIndecator)}>
									{indicator}
								</PTag>
								{increase && <IncreaseIcon />}
								{decrease && <DecreaseIcon />}
							</HStack>
						)}
					</VStack>
				</VStack>
				<div className={cls.icon}>
					<Icon />
				</div>
			</HStack>
		</Layout>
	);
});
