import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CreateProfile.module.scss';
import { Layout } from '@/shared/ui/Layout/Layout';
import { HStack, VStack } from '@/shared/ui/Stack';
import { LogoIcon } from '@/shared/assets/icons/LogoIcon';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { InputUi } from '@/shared/ui/Input';
import { ButtonUi } from '@/shared/ui/Button/Button';
import ArrowLineRight from '@/shared/assets/icons/ArrowLineRight2.svg';
import ArrowLineLeft from '@/shared/assets/icons/ArrowLineLeft.svg';
import { WorksForm } from './WorksForm';
import { AddressForm } from './AddressForm';
import { AvatarProfile } from '../AvatarProfile/AvatarProfile';
import { PhoneInput } from '@/shared/ui/PhoneInput/PhoneInput';
import {
	DynamicModuleLoader,
	ReducersList,
} from '@/shared/lib/componnets/DynamicModuleLoader/DynamicModuleLoader';
import {
	recruiterProfileReducer,
	recruiterProfileActions,
} from '../../model/slice/recruiterProfileSlice/recruiterProfileSlice';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import {
	getRecruiterFirstName,
	getRecruiterLastName,
	getRecruiterPhone,
	getRecruiterError,
	getRecruiterAvatar,
} from '../../model/selectors/getRecruiterProfileData/getRecruiterProfileData';
import { createRecruiterProfileReq } from '../../model/services/createRecruiterProfile/createRecruiterProfileReq';
import { getRouteDashboard } from '@/shared/const/router';
import { createProfileAvatarReq } from '../../model/services/AvatarReq/avatarReq';

export interface CreateProfileProps {
	className?: string;
}
const Reducers: ReducersList = {
	recruiterProfileData: recruiterProfileReducer,
};

export const CreateRecruiterProfile = memo((props: CreateProfileProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const firstName = useSelector(getRecruiterFirstName);
	const lastName = useSelector(getRecruiterLastName);
	const phone = useSelector(getRecruiterPhone);
	const avatar = useSelector(getRecruiterAvatar);
	const error = useSelector(getRecruiterError);

	const dis = useMemo(() => {
		if (firstName.length && lastName.length && phone.length) {
			return false;
		}
		return true;
	}, [firstName.length, lastName.length, phone.length]);

	const onChangeFirstName = useCallback(
		(value: string) => {
			dispatch(recruiterProfileActions.setFirstName(value));
		},
		[dispatch]
	);

	const onChangeLastName = useCallback(
		(value: string) => {
			dispatch(recruiterProfileActions.setLastName(value));
		},
		[dispatch]
	);

	const onChangePhone = useCallback(
		(value: string) => {
			dispatch(recruiterProfileActions.setPhoneName(value));
		},
		[dispatch]
	);

	const onCreateProfile = useCallback(async () => {
		const result = await dispatch(createRecruiterProfileReq());
		if (
			result.meta.requestStatus === 'fulfilled' ||
			result.payload === 'ERR_PROFILE_EXISTS'
		) {
			navigate(getRouteDashboard());
		}
		if (avatar) {
			dispatch(createProfileAvatarReq('recruiter'));
		}
	}, [avatar, dispatch, navigate]);

	return (
		<DynamicModuleLoader reducers={Reducers}>
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
					<AvatarProfile userType="recruiter" />
					<PTag className={cls.mistake} tage="14Reg">
						Your Contact
					</PTag>
					<HStack max align="center" gap={1}>
						<InputUi
							value={firstName}
							className={cls.inputs}
							type="text"
							label="First Name"
							onChange={onChangeFirstName}
						/>
						<InputUi
							value={lastName}
							className={cls.inputs}
							type="text"
							label="Last Name"
							onChange={onChangeLastName}
						/>
					</HStack>
					<PhoneInput
						className={cls.inputs}
						type="number"
						label="Phone number"
						value={phone}
						onChange={onChangePhone}
					/>
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
							disabled={dis}
							className={cls.btn}
							onClick={onCreateProfile}
							size="L"
							icon={<ArrowLineRight className={cls.btnIcon} />}
						>
							Continue
						</ButtonUi>
					</HStack>
					<VStack>
						<PTag className={cls.error} tage="14Reg">
							{error}
						</PTag>
					</VStack>
				</VStack>
			</Layout>
		</DynamicModuleLoader>
	);
});
