import { ChangeEvent, memo, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AvatarProfile.module.scss';
import { Avatar } from '@/shared/ui/Avatar';
import TooltipWrapper from '@/shared/ui/Tooltips/Tooltips';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { recruiterProfileActions } from '../../model/slice/recruiterProfileSlice/recruiterProfileSlice';

export interface AvatarProfileProps {
	className?: string;
}
export const AvatarProfile = memo((props: AvatarProfileProps) => {
	const { className } = props;
	const inputFileRef = useRef(null);
	const dispatch = useAppDispatch();
	const [image, setImage] = useState<string | undefined>(undefined);
	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newImage = event.target?.files?.[0];
		if (newImage) {
			setImage(URL.createObjectURL(newImage));
			const fileObj = event.target.files && event.target.files[0];
			const formData = new FormData();
			if (!fileObj || fileObj.size > 8000000) {
				return;
			}
			formData.append('file', fileObj);
			dispatch(recruiterProfileActions.setAvatar(formData));
		}
	};
	return (
		<div className={classNames(cls.AvatarProfile, {}, [className])}>
			<TooltipWrapper placement="bottom" titleText="choose Avatar">
				<input
					ref={inputFileRef}
					accept="image/*"
					hidden
					id="avatar-image-upload"
					type="file"
					onChange={handleOnChange}
				/>
				<label htmlFor="avatar-image-upload">
					<Avatar size={120} src={image} />
				</label>
			</TooltipWrapper>
		</div>
	);
});
