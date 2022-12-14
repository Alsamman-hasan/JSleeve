import { memo, Suspense } from 'react';
import AppRouter from './providers/router/ui/AppRouter.tsx';

export const App = memo(() => {
	return (
		<div className="app">
			<Suspense fallback="">
				<AppRouter />
			</Suspense>
		</div>
	);
});
