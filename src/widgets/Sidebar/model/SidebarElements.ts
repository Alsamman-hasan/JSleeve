import { FC, SVGProps } from 'react';
import SidebarDash from 'shared/assets/icons/SidebarDash.svg';
import Search from 'shared/assets/icons/sidebarSearch.svg';
import Notification from 'shared/assets/icons/Notification.svg';
import Contacts from 'shared/assets/icons/Contacts.svg';

export interface ElementTypes {
	name: string;
	Icon: FC<SVGProps<SVGSVGElement>>;
	path: string;
}
export const SidebarElements: ElementTypes[] = [
	{
		name: 'Dashboard',
		Icon: SidebarDash,
		path: '/Dashboard',
	},
	{
		name: 'Recruting',
		Icon: Search,
		path: '/Recruting',
	},
	{
		name: 'Contacts',
		Icon: Contacts,
		path: '/Contacts',
	},
	{
		name: 'Notification',
		Icon: Notification,
		path: '/Notification',
	},
];
