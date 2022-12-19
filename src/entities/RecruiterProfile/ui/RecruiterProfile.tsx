import { memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RecruiterProfile.module.scss';
import { TabsUi } from '@/shared/ui/Tabs';
import { VStack } from '@/shared/ui/Stack';
import { MyAccount } from './MyAcount/MyAccount';

export interface RecruiterProfileProps {
	className?: string;
}

export const RecruiterProfile = memo((props: RecruiterProfileProps) => {
	const { className } = props;
	const { pathname } = useLocation();
	const pathnames = useMemo(() => {
		return pathname.split(/[/:\s]/).filter((x) => x);
	}, [pathname]);
	const tabs = [
		{
			tab: 'My Account',
			element: <MyAccount />,
		},
		{
			tab: 'Settings',
			element: <div>Settings</div>,
		},
		{
			tab: 'Billing',
			element: <div>Billing</div>,
		},
	];
	const defaultTab = useMemo(() => {
		if (pathnames[1] === 'Settings') {
			return 1;
		}
		if (pathnames[1] === 'Billing') {
			return 2;
		}
		return 0;
	}, [pathnames]);
	return (
		<VStack className={classNames(cls.RecruiterProfile, {}, [className])}>
			<TabsUi
				classTabs={cls.classTabs}
				tabs={tabs}
				hasNavLink
				defaultTab={defaultTab}
			/>
		</VStack>
	);
});
