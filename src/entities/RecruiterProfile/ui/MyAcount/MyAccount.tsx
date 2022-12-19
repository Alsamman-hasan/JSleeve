import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MyAccount.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Layout } from '@/shared/ui/Layout/Layout';
import { PTag } from '@/shared/ui/Paragraph/P';
import { AccpuntHeader } from './AccpuntHeader';
import { AccountDetails } from './AccountDetails';

export interface MyAccountProps {
	className?: string;
}

export const MyAccount = memo((props: MyAccountProps) => {
	const { className } = props;
	return (
		<VStack
			max
			align="center"
			gap={1.125}
			className={classNames(cls.MyAccount, {}, [className])}
		>
			<AccpuntHeader />
			<Layout className={cls.Details}>
				<VStack max gap={1.375}>
					<HStack max align="center" justify="between">
						<PTag tage="14SemiBold"> Profile Details </PTag>
						<PTag tage="12Reg"> Edit Profile </PTag>
					</HStack>
					<AccountDetails />
				</VStack>
			</Layout>
		</VStack>
	);
});
