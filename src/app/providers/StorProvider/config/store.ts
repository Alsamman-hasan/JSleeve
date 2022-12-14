import {
	CombinedState,
	configureStore,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from '@/entities/Counter';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';

import { createReducerManager } from './reduserManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { checkUserTypeReducer } from '@/features/signIn';
import { AuthDataReducer } from '@/entities/AuthData';
import { userTypeReducer } from '@/entities/SignUpSteps';
import { linksReducer } from '@/entities/Links';

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>
) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		userAuthData: AuthDataReducer,
		checkUserType: checkUserTypeReducer,
		userType: userTypeReducer,
		links: linksReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
	};

	const reducerManager = createReducerManager(rootReducer);
	const extraArg: ThunkExtraArg = {
		api: $api,
	};
	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: extraArg,
				},
				serializableCheck: false,
			}).concat(rtkApi.middleware),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
