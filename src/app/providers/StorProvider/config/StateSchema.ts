import {
	AnyAction,
	CombinedState,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from '@/entities/Counter';
import { CheckUserTypeSchema, SignInSchema } from '@/features/signIn';
import { SignUpSchema } from '@/features/SignUp/model/types/SignUpSchema';
import { rtkApi } from '@/shared/api/rtkApi';
import { AuthDataSchema } from '@/entities/AuthData';
import { UserTypeSchema } from '@/entities/SignUpSteps';
import { RecruiterProfileSchema } from '@/entities/CreateProfile';
import { LinksSchema } from '@/entities/Links';

export interface StateSchema {
	counter: CounterSchema;
	checkUserType: CheckUserTypeSchema;
	userAuthData: AuthDataSchema;
	userType: UserTypeSchema;
	links: LinksSchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

	// async reducersList
	signInData?: SignInSchema;
	signUpData?: SignUpSchema;
	recruiterProfileData?: RecruiterProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}
