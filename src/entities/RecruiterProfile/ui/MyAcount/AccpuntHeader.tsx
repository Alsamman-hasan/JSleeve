import { memo, useCallback, useMemo } from 'react';
import { AuthContextProps, useAuth } from 'oidc-react';
import cls from './MyAccount.module.scss';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/Avatar';
import UserIcon from '@/shared/assets/icons/UserCircleMin.svg';
import MapPinIcon from '@/shared/assets/icons/MapPin.svg';
import EnvelopeSimpleIcon from '@/shared/assets/icons/EnvelopeSimple.svg';
import { ButtonUi } from '@/shared/ui/Button/Button';
import { Layout } from '@/shared/ui/Layout/Layout';

export interface AccpuntHeaderProps {
	className?: string;
}
const UserInfoItems = [
	{ icon: UserIcon, title: 'Recruiter' },
	{ icon: MapPinIcon, title: 'CA, Sf' },
	{ icon: EnvelopeSimpleIcon, title: 'Olivia_rhye@mail.com' },
];

export const AccpuntHeader = memo((props: AccpuntHeaderProps) => {
	const { className } = props;
	const auth: AuthContextProps = useAuth();
	const UserInfo = useMemo(() => UserInfoItems, []);

	const onLogoutHandler = () => {
		auth.signOut();
		auth.signOutRedirect();
		// try {
		// 	// auth.userManager.metadataService.cre;
		// 	// auth.userManager.signoutRedirect();
		// 	// auth.userManager.signoutSilent({
		// 	// 	id_token_hint: auth.userData?.id_token,
		// 	// 	post_logout_redirect_uri: `${window.location.origin}/check_user`,
		// 	// 	state: auth.userData?.state,
		// 	// });
		// 	auth.createSignoutRequest({
		// 		id_token_hint: auth.userData?.id_token,
		// 	});
		// } catch (error) {
		// 	console.log(error);
		// }
	};
	return (
		<Layout className={cls.wrapper}>
			<HStack justify="between">
				<HStack gap={2.625}>
					<HStack gap={1}>
						<Avatar
							src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png"
							alt="image"
							size={42}
						/>
						<Htag tage="h3">Olivia Rhye</Htag>
					</HStack>
					<HStack gap={1.125} align="center">
						{UserInfo.map((item) => (
							<HStack key={item.title} gap={0.375} className={cls.userInfo}>
								<item.icon />
								<PTag tage="12Reg">{item.title}</PTag>
							</HStack>
						))}
					</HStack>
				</HStack>

				<ButtonUi layOut="TextOnly" theme="outline" onClick={onLogoutHandler}>
					Log out
				</ButtonUi>
			</HStack>
		</Layout>
	);
});
