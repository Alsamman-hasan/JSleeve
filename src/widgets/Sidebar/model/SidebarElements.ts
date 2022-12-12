import { FC, SVGProps } from 'react';
import SidebarDash from '@/shared/assets/icons/SidebarDash.svg';
import Search from '@/shared/assets/icons/sidebarSearch.svg';
import Notification from '@/shared/assets/icons/Notification.svg';
import Contacts from '@/shared/assets/icons/Contacts.svg';
import { getRouteDashboard, getRouteSearching } from '@/shared/const/router';

export interface ElementTypes {
	name: string;
	Icon: FC<SVGProps<SVGSVGElement>>;
	link: string;
}

export const SidebarElements: ElementTypes[] = [
	{
		name: 'Dashboard',
		Icon: SidebarDash,
		link: getRouteDashboard(),
	},
	{
		name: 'Recruting',
		Icon: Search,
		link: getRouteSearching(),
	},
	{
		name: 'Contacts',
		Icon: Contacts,
		link: '/auth/signIn',
	},
	{
		name: 'Notification',
		Icon: Notification,
		link: '/auth/account_type',
	},
];
