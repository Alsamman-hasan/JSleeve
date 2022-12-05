import { ConfirmUser } from '@/features/AuthConfirm';
import { memo } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import cls from './ConfirmUserPage.module.scss';

const ConfirmUserPage = memo(() => {
	return (
		<Wrapper>
			<HStack className={cls.Wrapper} align="center" justify="center">
				<ConfirmUser />
			</HStack>
		</Wrapper>
	);
});

export default ConfirmUserPage;
