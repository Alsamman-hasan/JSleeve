import { ConfirmEmail } from 'features/AuthConfirm';
import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import { Wrapper } from 'shared/ui/Wrapper/Wrapper';
import cls from './ConfirmEmailPage.module.scss';

const ConfirmEmailPage = memo(() => {
	return (
		<Wrapper className={cls.ConfirmEmailPage}>
			<HStack className={cls.Wrapper} align="center" justify="center">
				<ConfirmEmail />
			</HStack>
		</Wrapper>
	);
});

export default ConfirmEmailPage;
