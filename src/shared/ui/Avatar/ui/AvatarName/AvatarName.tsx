import { memo } from 'react';
import { PTag } from '../../../../ui/Paragraph/P';
import { HStack, VStack } from '../../../../ui/Stack';
import { classNames } from '../../../../lib/classNames/classNames';
import cls from './AvatarName.module.scss';
import { Avatar } from '../Avatar/Avatar';

export interface AvatarNameProps {
	className?: string;
	name?: string;
	job?: string;
	src?: string;
	alt?: string;
	size?: number;
	onClick?: () => void;
}
export const AvatarName = memo((props: AvatarNameProps) => {
	const { className, alt, job, name, size, src, onClick } = props;
	return (
		<HStack
			align="center"
			justify="end"
			gap={1}
			onClick={onClick}
			className={classNames(cls.AvatarName, {}, [className])}
		>
			<VStack align="end">
				<PTag tage="14SemiBold" className={cls.name}>
					{name}
				</PTag>
				<PTag tage="12Reg" className={cls.job}>
					{job}
				</PTag>
			</VStack>
			<Avatar alt={alt} size={size} src={src} />
		</HStack>
	);
});
