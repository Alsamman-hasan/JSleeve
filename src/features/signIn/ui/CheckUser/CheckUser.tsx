import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CheckUser.module.scss';
import { Loader } from '@/shared/ui/Loader/Loader';
import { userPool } from '../../model/UserPool./UserPool';

export interface CheckUserProps {
	className?: string;
}
export const CheckUser = memo((props: CheckUserProps) => {
	const { className } = props;
	return (
		<div className={classNames(cls.CheckUser, {}, [className])}>
			<Loader />
		</div>
	);
});
