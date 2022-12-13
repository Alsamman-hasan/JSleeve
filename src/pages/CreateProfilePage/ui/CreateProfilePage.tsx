import { memo } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import cls from './CreateProfilePage.module.scss';
import { CreateProfile } from '@/entities/CreateProfile';

export const CreateProfilePage = memo(() => {
	return (
		<Wrapper>
			<HStack className={cls.Wrapper} align="center" justify="center">
				<CreateProfile />
			</HStack>
		</Wrapper>
	);
});
export default CreateProfilePage;
