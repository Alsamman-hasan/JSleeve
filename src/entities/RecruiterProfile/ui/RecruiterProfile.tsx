import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RecruiterProfile.module.scss';
import { TabsUi } from '@/shared/ui/Tabs';

export interface RecruiterProfileProps {
	className?: string;
}

export const RecruiterProfile = memo((props: RecruiterProfileProps) => {
	const { className } = props;
	const tabs = [
		{
			tab: 'My Account',
			element: <div>My Account</div>,
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
	return (
		<div className={classNames(cls.RecruiterProfile, {}, [className])}>
			<TabsUi tabs={tabs} />
		</div>
	);
});
