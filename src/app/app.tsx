import { memo, Suspense } from 'react';
import { fetchUserType } from '@/features/signIn';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import AppRouter from './providers/router/ui/AppRouter.tsx';

export const App = memo(() => {
	const dispatch = useAppDispatch();
	useInitialEffect(() => {
		const token = localStorage.getItem('tokenId');
		if (token) dispatch(fetchUserType());
	});
	return (
		<div className="app">
			<Suspense fallback="">
				<AppRouter />
			</Suspense>
		</div>
	);
});
