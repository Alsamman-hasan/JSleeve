import { memo, useState } from 'react';
import AvatarIcon from '@shared/assets/icons/Avatar.svg';
import { Collapse, IconButton } from '@mui/material';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RecruiterAccount.module.scss';
import { Layout } from '@/shared/ui/Layout/Layout';
import { HStack, VStack } from '@/shared/ui/Stack';
import { LogoIcon } from '@/shared/assets/icons/LogoIcon';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { Avatar } from '@/shared/ui/Avatar';
import { InputUi } from '@/shared/ui/Input';
import { DividerUi } from '@/shared/ui/Divider/DividerUi';
import { ButtonUi } from '@/shared/ui/Button/Button';
import ArrowLineRight from '@/shared/assets/icons/ArrowLineRight2.svg';
import ArrowLineLeft from '@/shared/assets/icons/ArrowLineLeft.svg';
import ArrowLineUp from '@/shared/assets/icons/ArrowLineUp.svg';
import ArrowLineDown from '@/shared/assets/icons/ArrowLineDown.svg';

export interface RecruiterAccountProps {
	className?: string;
}
export const RecruiterAccount = memo((props: RecruiterAccountProps) => {
	const { className } = props;
	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<Layout>
			<VStack
				align="center"
				justify="center"
				gap={28}
				className={classNames(cls.contetn, {}, [className])}
			>
				<LogoIcon />
				<Htag tage="h2" className={cls.header}>
					Account Info
				</Htag>
				<PTag className={cls.mistake} tage="14Reg">
					You can anytime add info in your Profile
				</PTag>
				<Avatar />
				<PTag className={cls.mistake} tage="14Reg">
					Your Contact
				</PTag>
				<HStack align="center" gap={16}>
					<InputUi className={cls.inputs} type="text" label="First Name" />
					<InputUi className={cls.inputs} type="text" label="Last Name" />
				</HStack>
				<InputUi className={cls.inputs} type="text" label="Phone number" />
				<DividerUi
					orientation="horizontal"
					text="Your Address"
					className={cls.divider}
				/>
				<DividerUi
					orientation="horizontal"
					text="Your Work"
					className={cls.divider}
				>
					{open ? (
						<IconButton onClick={handleClick}>
							<ArrowLineUp />
						</IconButton>
					) : (
						<ArrowLineDown onClick={handleClick} />
					)}
				</DividerUi>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<VStack gap={16}>
						<InputUi className={cls.inputs} type="text" label="Country" />
						<HStack gap={16}>
							<InputUi className={cls.inputs} type="text" label="State" />
							<InputUi className={cls.inputs} type="text" label="City" />
						</HStack>
						<HStack gap={16}>
							<InputUi className={cls.inputs} type="text" label="Address" />
							<InputUi className={cls.inputs} type="text" label="Zip" />
						</HStack>
					</VStack>
				</Collapse>
				<HStack align="center" gap={16}>
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
