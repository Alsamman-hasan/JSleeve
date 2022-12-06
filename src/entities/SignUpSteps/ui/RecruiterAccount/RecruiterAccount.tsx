import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RecruiterAccount.module.scss';
import { Layout } from '@/shared/ui/Layout/Layout';
import { HStack, VStack } from '@/shared/ui/Stack';
import { LogoIcon } from '@/shared/assets/icons/LogoIcon';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { Avatar } from '@/shared/ui/Avatar';
import { InputUi } from '@/shared/ui/Input';
import { ButtonUi } from '@/shared/ui/Button/Button';
import ArrowLineRight from '@/shared/assets/icons/ArrowLineRight2.svg';
import ArrowLineLeft from '@/shared/assets/icons/ArrowLineLeft.svg';
import { WorksForm } from './WorksForm';
import { AddressForm } from './AddressForm';

export interface RecruiterAccountProps {
	className?: string;
}
export const RecruiterAccount = memo((props: RecruiterAccountProps) => {
	const { className } = props;

	return (
		<Layout>
			<VStack
				align="center"
				justify="center"
				gap={28}
				className={classNames(cls.contetn, {}, [className])}
			>
				<LogoIcon />
				<VStack max align="center" gap={12}>
					<Htag tage="h2" className={cls.header}>
						Account Info
					</Htag>
					<PTag className={cls.mistake} tage="14Reg">
						You can anytime add info in your Profile
					</PTag>
				</VStack>
				<Avatar />
				<PTag className={cls.mistake} tage="14Reg">
					Your Contact
				</PTag>
				<HStack max align="center" gap={16}>
					<InputUi className={cls.inputs} type="text" label="First Name" />
					<InputUi className={cls.inputs} type="text" label="Last Name" />
				</HStack>
				<InputUi className={cls.inputs} type="text" label="Phone number" />
				<AddressForm />
				<WorksForm />
				<HStack max align="center" gap={18} justify="between">
					<ButtonUi
						layOut="IconBefor"
						theme="secondary"
						className={cls.btn}
						size="L"
						icon={<ArrowLineLeft className={cls.btnIcon} />}
					>
						Continue
					</ButtonUi>
					<ButtonUi
						layOut="IconAfter"
						theme="primary"
						className={cls.btn}
						size="L"
						icon={<ArrowLineRight className={cls.btnIcon} />}
					>
						Previous
					</ButtonUi>
				</HStack>
			</VStack>
		</Layout>
	);
});
