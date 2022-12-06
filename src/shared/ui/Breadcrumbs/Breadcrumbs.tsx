import { Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Links } from '../Links/Links';
import { PTag } from '../Paragraph/P';
import './Breadcrumbs.scss';

export const BreadcrumbsUi = memo(() => {
	const { pathname } = useLocation();
	const pathnames = pathname.split('/').filter((x) => x);
	// const pathname = '/auth/signIn/uikit';
	// const pathnames = pathname.split('/').filter((x) => x);

	return (
		<MUIBreadcrumbs
			aria-label="breadcrumb"
			className={classNames('breadcrumb')}
		>
			{pathnames.map((value, index) => {
				const last = index === pathnames.length - 1;
				const to = `/${pathnames.slice(0, index + 1).join('/')}`;
				return last ? (
					<PTag className="breadcrumb__lastLink" tage="12Reg" key={to}>
						{value}
					</PTag>
				) : (
					<Links className="breadcrumb__Links" to={to} key={to}>
						<PTag tage="12Reg">{value}</PTag>
					</Links>
				);
			})}
		</MUIBreadcrumbs>
	);
});
