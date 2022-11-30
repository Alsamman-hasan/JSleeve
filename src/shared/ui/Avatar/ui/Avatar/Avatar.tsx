import { CSSProperties, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

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
    <img
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
    />
  );
});
