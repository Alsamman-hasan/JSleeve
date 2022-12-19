import { memo, useCallback } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import cls from './CreateProfilePage.module.scss';
import {
	CreateAthleteProfile,
	CreateRecruiterProfile,
} from '@/entities/CreateProfile';

export const CreateProfilePage = memo(() => {
	const userType = localStorage.getItem('user_type');
	const contetn = useCallback(() => {
		if (userType === '') {
			return <CreateRecruiterProfile />;
		}
		return <CreateAthleteProfile />;
	}, [userType]);
	return (
		<Wrapper>
			<HStack className={cls.Wrapper} align="center" justify="center">
				{contetn()}
			</HStack>
		</Wrapper>
	);
});
export default CreateProfilePage;
