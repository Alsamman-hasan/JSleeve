import { memo, useState } from 'react';
import { ButtonUi } from '@/shared/ui/Button/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import ArrowIcont from '@/shared/assets/icons/Arrow.svg';
import { InputUi } from '@/shared/ui/Input/ui/InputUi/InputUi';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import BascIcon from '@/shared/assets/icons/Basketball.svg';
import { AvatarName } from '@/shared/ui/Avatar';
import { SearchInput } from '@/shared/ui/SeartchInput/SearchInput';
import TooltipWrapper from '@/shared/ui/Tooltips/Tooltips';
import { Sidebar } from '@/widgets/Sidebar';
import { Header } from '@/widgets/Header/ui/Header';
import { BreadcrumbsUi } from '@/shared/ui/Breadcrumbs/Breadcrumbs';
import cls from './UiKit.module.scss';
import { CardUi } from '@/shared/ui/Card';
import { TabsUi } from '@/shared/ui/Tabs';

const BasIcon = memo(() => <BascIcon />);

export const UiKit = () => {
	const [selected, setSelected] = useState<string | null>(null);
	const [value, setValue] = useState('');
	const onSelect = (value: string | null) => {
		setSelected(value);
	};

	const onSearchChange = (value: string) => {
		setValue(value);
	};

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
		<Wrapper className={cls.contetn}>
			<Header className={cls.header} />
			<VStack
				className={cls.main}
				gap={1}
				justify="between"
				align="center"
				// style={{ paddingTop: '100px' }}
			>
				<CardUi
					value="1"
					onSelect={onSelect}
					title="Recruiter Account"
					Icon={BasIcon}
					selected={selected}
					subTitle="I’m looking for professional athletes"
				/>
				{/* <TooltipWrapper placement="top" titleText="test">
					<CardUi
						value="2"
						selected={selected}
						onSelect={onSelect}
						title="Recruiter Account"
						Icon={BasIcon}
						subTitle="I’m looking for professional athletes"
					/>
				</TooltipWrapper> */}
				<TabsUi hasNavLink={false} tabs={tabs} />
				<AvatarName
					job="testteestest"
					name="Test-Testing"
					src="https://i.guim.co.uk/img/media/a7fe7170defa865d2b96b829f05c5d8fa82d8edf/0_20_2201_1321/master/2201.jpg?width=1200&quality=85&auto=format&fit=max&s=860ee271cce4b3ac0f97cb7c48f5842d"
				/>
				<SearchInput onChange={onSearchChange} value={value} />
				<BreadcrumbsUi />
			</VStack>
			<Sidebar className={cls.sidebar} />
		</Wrapper>
	);
};
