import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CreateProfile.module.scss';
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

export interface CreateProfileProps {
	className?: string;
}
export const CreateProfile = memo((props: CreateProfileProps) => {
	const { className } = props;

	return (
		<Layout>
			<VStack
				align="center"
				justify="center"
				gap={1.75}
				className={classNames(cls.contetn, {}, [className])}
			>
				<LogoIcon />
				<VStack max align="center" gap={0.75}>
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
				<HStack max align="center" gap={1}>
					<InputUi className={cls.inputs} type="text" label="First Name" />
					<InputUi className={cls.inputs} type="text" label="Last Name" />
				</HStack>
				<InputUi className={cls.inputs} type="text" label="Phone number" />
				<AddressForm />
				<WorksForm />
				<HStack max align="center" gap={1.125} justify="between">
					<ButtonUi
						layOut="IconBefor"
						theme="secondary"
						className={cls.btn}
						size="L"
						icon={<ArrowLineLeft className={cls.btnIcon} />}
					>
						Previous
					</ButtonUi>
					<ButtonUi
						layOut="IconAfter"
						theme="primary"
						className={cls.btn}
						size="L"
						icon={<ArrowLineRight className={cls.btnIcon} />}
					>
						Continue
					</ButtonUi>
				</HStack>
			</VStack>
		</Layout>
	);
});
