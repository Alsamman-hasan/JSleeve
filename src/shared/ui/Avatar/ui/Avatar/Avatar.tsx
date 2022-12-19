import { CSSProperties, memo, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import AvatarIcon from '../../../../assets/icons/Avatar.svg';
import { AppImage } from '@/shared/ui/AppImage';

export interface AvatarProps {
	className?: string;
	src?: string;
	alt?: string;
	size?: number;
}
export const Avatar = memo((props: AvatarProps) => {
	const { className, alt, src, size } = props;
	const mods: Mods = {};
	const styles = useMemo<CSSProperties>(
		() => ({
			width: size || 40,
			height: size || 40,
		}),
		[size]
	);

	return (
		<AppImage
			fallback={<AvatarIcon width={size} height={size} />}
			errorFallback={<AvatarIcon width={size} height={size} />}
			src={src}
			alt={alt}
			style={styles}
			className={classNames(cls.Avatar, mods, [className])}
		/>
	);
});
