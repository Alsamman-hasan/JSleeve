import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import dayjs, { Dayjs } from 'dayjs';
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
import { PersonalForm } from './PersonalForm';
import { AddressForm } from './AddressForm';
import { AvatarProfile } from '../AvatarProfile/AvatarProfile';
import {
	DynamicModuleLoader,
	ReducersList,
} from '@/shared/lib/componnets/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { getRouteDashboard } from '@/shared/const/router';
import { PhysicalForm } from './PhysicalCharacteristics';
import {
	athleteProfileReducer,
	athleteProfileActions,
} from '../../model/slice/athleteProfileSlice/athleteProfileSlice';
import {
	getAthleteFirstName,
	getAthleteLastName,
	getAthleteProgramName,
	getAthleteErrors,
	getAthleteAvatar,
	getAthleteBirthDate,
} from '../../model/selectors/getAthleteProfileData /geAthleteProfileData';
import { createAthleteProfileReq } from '../../model/services/createAthleteProfile/createAthleteProfileReq';
import { createProfileAvatarReq } from '../../model/services/AvatarReq/avatarReq';
import { DatePickerUi } from '@/shared/ui/DatePicker/DatePicker';

export interface CreateProfileProps {
	className?: string;
}
const Reducers: ReducersList = {
	athleteProfileData: athleteProfileReducer,
};

export const CreateAthleteProfile = memo((props: CreateProfileProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const firstName = useSelector(getAthleteFirstName);
	const lastName = useSelector(getAthleteLastName);
	const programName = useSelector(getAthleteProgramName);
	const barthDay = dayjs(useSelector(getAthleteBirthDate));
	const avatar = useSelector(getAthleteAvatar);
	const errors = useSelector(getAthleteErrors);

	const dis = useMemo(() => {
		if (firstName.length && lastName.length && programName.length) {
			return false;
		}
		return true;
	}, [firstName.length, lastName.length, programName.length]);

	const onChangeFirstName = useCallback(
		(value: string) => {
			dispatch(athleteProfileActions.setFirstName(value));
		},
		[dispatch]
	);

	const onChangeLastName = useCallback(
		(value: string) => {
			dispatch(athleteProfileActions.setLastName(value));
		},
		[dispatch]
	);

	const onChangeProgramName = useCallback(
		(value: string) => {
			dispatch(athleteProfileActions.setProgramName(value));
		},
		[dispatch]
	);

	const onChangeDate = useCallback(
		(value: Dayjs | null) => {
			const date = value?.format('YYYY-MM-DD');
			dispatch(athleteProfileActions.setBirthDate(`${date}`));
		},
		[dispatch]
	);

	const onCreateProfile = useCallback(async () => {
		if (avatar) {
			dispatch(createProfileAvatarReq('athlete'));
		}
		const result = await dispatch(createAthleteProfileReq());
		if (
			result.meta.requestStatus === 'fulfilled' ||
			result.payload === 'ERR_PROFILE_EXISTS'
		) {
			navigate(getRouteDashboard());
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
					<AvatarProfile userType="athlete" />
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
					<HStack max align="center" gap={1}>
						<InputUi
							value={programName}
							className={cls.inputs}
							type="text"
							label="Program Name"
							onChange={onChangeProgramName}
						/>
						<DatePickerUi
							value={barthDay}
							className={cls.inputs}
							label="Birth Date"
							onChange={onChangeDate}
						/>
					</HStack>
					<AddressForm />
					<PersonalForm />
					<PhysicalForm />
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
						{errors?.map((error) => (
							<PTag key={error} className={cls.error} tage="14Reg">
								{error}
							</PTag>
						))}
					</VStack>
				</VStack>
			</Layout>
		</DynamicModuleLoader>
	);
});
