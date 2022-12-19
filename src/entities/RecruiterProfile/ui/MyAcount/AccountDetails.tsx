import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MyAccount.module.scss';
import { PTag } from '@/shared/ui/Paragraph/P';
import { VStack, HStack } from '@/shared/ui/Stack';

export interface AccountDetailsProps {
	className?: string;
}

const userInfoItems = [
	{ title: 'Work', desc: 'SF State Basketball Recruiting' },
	{ title: 'E-mail', desc: 'Olivia_rhye@mail.com' },
	{ title: 'Phone', desc: '+ 650 123-45-67' },
	{ title: 'Country', desc: 'United States' },
	{ title: 'State', desc: 'California' },
	{ title: 'City', desc: 'San Francisco' },
	{ title: 'Address', desc: 'Pine st.' },
	{ title: 'Zip', desc: '1100' },
];

export const AccountDetails = memo((props: AccountDetailsProps) => {
	const { className } = props;
	return (
		<VStack
			gap={1.125}
			className={classNames(cls.AccountDetails, {}, [className])}
		>
			{userInfoItems.map((item) => (
				<HStack key={item.title} gap={0}>
					<PTag tage="12Reg" className={cls.userInfoItem}>
						{item.title}
					</PTag>
					<PTag tage="14Reg" className={cls.userData}>
						{item.desc}
					</PTag>
				</HStack>
			))}
		</VStack>
	);
});
