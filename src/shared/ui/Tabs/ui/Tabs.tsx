import {
	CSSProperties,
	memo,
	SyntheticEvent,
	useEffect,
	useState,
} from 'react';
import './tabs.scss';
import { Tabs, Tab } from '@mui/material';
import { classNames } from '../../../lib/classNames/classNames';

export interface ITabContent {
	tab: string;
	element: JSX.Element;
}

export interface ITabsProps {
	tabs: ITabContent[];
	defaultTab?: number;
	style?: CSSProperties;
	className?: string;
	classTabs?: string;
	variant?: 'fullWidth' | 'scrollable' | 'standard';
}

export const TabsUi = memo(
	({
		tabs,
		defaultTab = 0,
		className,
		variant = 'fullWidth',
		classTabs,
		style,
	}: ITabsProps) => {
		const [activateTab, setActivateTab] = useState(false);
		const [valueTab, setValueTab] = useState(defaultTab);

		useEffect(() => {
			const timer = setTimeout(() => {
				setActivateTab(true);
			}, 100);
			return () => {
				clearTimeout(timer);
			};
		}, []);

		const handleChangeTab = (event: SyntheticEvent, newValue: number) => {
			setValueTab(newValue);
		};

		return (
			<div className={classNames('tabs', {}, [className])}>
				<Tabs
					value={valueTab}
					onChange={handleChangeTab}
					variant={variant}
					className={classTabs}
					style={style}
				>
					{activateTab &&
						tabs.map(({ tab }) => {
							return <Tab key={tab} label={tab} />;
						})}
				</Tabs>
				{tabs.map(({ element, tab }, index) => {
					if (valueTab === index) {
						localStorage.setItem('Tab', tab.replace(' ', ''));
					}
					return (
						<div
							key={tab}
							role="tabpanel"
							hidden={valueTab !== index}
							id={`simple-tabpanel-${tab.replace(' ', '')}`}
							className="content"
						>
							{element}
						</div>
					);
				})}
			</div>
		);
	}
);
