/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from 'react';

export const SignInPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./SignInPage')), 1500);
    })
);
