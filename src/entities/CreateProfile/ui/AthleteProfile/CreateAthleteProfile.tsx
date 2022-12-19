import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CreateProfile.module.scss';
import { Layout } from '@/shared/ui/Layout/Layout';
import { HStack, VStack } from '@/shared/ui/Stack';
import { LogoIcon } from '@/shared/assets/icons/LogoIcon';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { DividerUi } from '@/shared/ui/Divider/DividerUi';
import AppStoreIcon from '@/shared/assets/icons/AppStore.svg';
import GooglePayIcon from '@/shared/assets/icons/GooglePlay.svg';

export interface CreateProfileProps {
	className?: string;
}

export const CreateAthleteProfile = memo((props: CreateProfileProps) => {
	const { className } = props;
	return (
		<Layout className={cls.wrapper}>
			<VStack
				align="center"
				justify="center"
				gap={1.75}
				className={classNames(cls.contetn, {}, [className])}
			>
				<LogoIcon />
				<VStack max align="center" gap={2}>
					<Htag tage="h2" className={cls.header}>
						Create an account
					</Htag>
					<HStack max align="center" gap={1.125} className={cls.step}>
						<VStack gap={1} max>
							<PTag tage="14Reg">1. Download the mobile app</PTag>
							<PTag tage="14Reg">2. Create an account in mobile app</PTag>
							<PTag tage="14Reg">3. Sign In using Sparta</PTag>
						</VStack>
						<DividerUi className={cls.Divider} orientation="vertical" />
						<VStack className={cls.DownloadLinks} gap={1}>
							<AppStoreIcon />
							<GooglePayIcon />
						</VStack>
					</HStack>
				</VStack>
			</VStack>
		</Layout>
	);
});
