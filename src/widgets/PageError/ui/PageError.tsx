import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonUi } from '@/shared/ui/Button/Button';
import cls from './PageError.module.scss';

export interface PageErrorProps {
	className?: string;
}
export const PageError = ({ className }: PageErrorProps) => {
	const realodPage = () => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	};

	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			<p className={classNames(cls.info)}>Somthing went wrang </p>
			<ButtonUi
				layOut="TextOnly"
				theme="primary"
				className={cls.btn}
				onClick={realodPage}
			>
				Reload Page
			</ButtonUi>
		</div>
	);
};
