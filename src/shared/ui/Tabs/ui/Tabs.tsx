import {
	CSSProperties,
	memo,
	SyntheticEvent,
	useEffect,
	useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import './tabs.scss';
import { Tabs, Tab } from '@mui/material';
import { classNames } from '../../../lib/classNames/classNames';
import { useAppDispatch } from '../../../lib/hooks/AppDispatch/AppDispatch';
import { linksActions } from '@/entities/Links';
import { getRouteRcruiterProfile } from '@/shared/const/router';

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
	hasNavLink: boolean;
}

interface LinkTabProps {
	label: string;
}

const LinkTab = (props: LinkTabProps) => {
	const { label, ...otherProps } = props;
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const onSetLinkHandler = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		event.preventDefault();
		const NewTab = label.replace(' ', '');
		dispatch(linksActions.setLink(NewTab));
		navigate(getRouteRcruiterProfile(`${NewTab}`));
	};
	return (
		<Tab
			{...otherProps}
			label={label}
			component="a"
			onClick={onSetLinkHandler}
		/>
	);
};

export const TabsUi = memo(
	({
		tabs,
		defaultTab = 0,
		className,
		variant = 'fullWidth',
		classTabs,
		style,
		hasNavLink = false,
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
							if (hasNavLink) {
								return <LinkTab key={tab} label={tab} />;
							}
							return <Tab label={tab} key={tab} />;
						})}
				</Tabs>
				{tabs.map(({ element, tab }, index) => {
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
