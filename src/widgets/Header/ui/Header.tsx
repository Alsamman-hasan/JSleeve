import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SearchInput } from '@/shared/ui/SeartchInput/SearchInput';
import { HStack } from '@/shared/ui/Stack';
import Notification from '@/shared/assets/icons/Notification.svg';
import { AvatarName } from '@/shared/ui/Avatar';
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs/Breadcrumbs';
import { BadgeWrapper } from '@/shared/ui/BadgeWrapper/BadgeWrapper';
import cls from './Header.module.scss';

export interface HeaderProps {
	className?: string;
}
export const Header = memo((props: HeaderProps) => {
	const { className } = props;
	const [value, setValue] = useState('');
	const onSearchChange = useCallback((value: string) => {
		setValue(value);
	}, []);

	return (
		<div className={classNames(cls.Header, {}, [className])}>
			<Breadcrumbs />
			<HStack align="center" justify="end" gap={26} className={cls.headerItems}>
				<SearchInput onChange={onSearchChange} value={value} />
				<BadgeWrapper>
					<Notification className={cls.icon} />
				</BadgeWrapper>
				<AvatarName
					job="testteestest"
					name="Test-Testing"
					src="https://i.guim.co.uk/img/media/a7fe7170defa865d2b96b829f05c5d8fa82d8edf/0_20_2201_1321/master/2201.jpg?width=1200&quality=85&auto=format&fit=max&s=860ee271cce4b3ac0f97cb7c48f5842d"
				/>
			</HStack>
		</div>
	);
});
