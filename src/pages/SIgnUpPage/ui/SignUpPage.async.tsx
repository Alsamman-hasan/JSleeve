/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from 'react';

export const SignUpPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./SignUpPage')), 1500);
    })
);
